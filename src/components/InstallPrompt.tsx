import React, { useEffect, useState } from 'react';
import { 
  Download, 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Share, 
  PlusSquare, 
  Smartphone, 
  Laptop, 
  Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

type PlatformType = 'ios' | 'android' | 'desktop';

const detectPlatform = (): PlatformType => {
  if (typeof window === 'undefined') return 'desktop';
  const userAgent = window.navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(userAgent) || 
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (isIOS) return 'ios';
  if (/android/.test(userAgent)) return 'android';
  return 'desktop';
};

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showStepsModal, setShowStepsModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>('desktop');
  const [isInstalledSuccess, setIsInstalledSuccess] = useState(false);

  useEffect(() => {
    // Detect current user platform
    setSelectedPlatform(detectPlatform());

    // Check if already running in standalone mode (already running as installed PWA)
    const isStandalone = 
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      return;
    }

    // Check if dismissed in this session
    const hasDismissed = sessionStorage.getItem('pwa_install_dismissed_session');
    if (hasDismissed) {
      return;
    }

    // Handler for native beforeinstallprompt (Android, Chrome, Edge)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    // Handler for OS appinstalled event
    const handleAppInstalled = () => {
      setIsInstalledSuccess(true);
      setShowPrompt(true);
      setShowStepsModal(false);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.8 },
        colors: ['#3b82f6', '#10b981', '#6366f1', '#ffffff']
      });
      localStorage.setItem('pwa_app_installed', 'true');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Trigger prompt after 800ms for visitors
    const fallbackTimer = setTimeout(() => {
      setShowPrompt(true);
    }, 800);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    // If native prompt is available, we try triggering it
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult && choiceResult.outcome === 'accepted') {
          setIsInstalledSuccess(true);
          setShowStepsModal(false);
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.8 },
            colors: ['#3b82f6', '#10b981', '#60a5fa', '#ffffff']
          });
          localStorage.setItem('pwa_app_installed', 'true');
          setDeferredPrompt(null);
          return;
        }
      } catch (err) {
        console.error('Native install prompt error:', err);
      }
    }

    // Always show the step-by-step guided instructions modal
    setShowStepsModal(true);
  };

  const handleNativePromptFromModal = async () => {
    if (!deferredPrompt) return;
    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult && choiceResult.outcome === 'accepted') {
        setIsInstalledSuccess(true);
        setShowStepsModal(false);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.8 },
          colors: ['#3b82f6', '#10b981', '#60a5fa', '#ffffff']
        });
        localStorage.setItem('pwa_app_installed', 'true');
      }
    } catch (err) {
      console.error('Modal install error:', err);
    } finally {
      setDeferredPrompt(null);
    }
  };

  const handleContinueInApp = () => {
    setShowPrompt(false);
    setShowStepsModal(false);
    sessionStorage.setItem('pwa_install_dismissed_session', 'true');
  };

  const handleDismissBanner = () => {
    setShowPrompt(false);
    sessionStorage.setItem('pwa_install_dismissed_session', 'true');
  };

  const handleCloseStepsModal = () => {
    setShowStepsModal(false);
  };

  return (
    <>
      {/* Installation Alert Card (Mobile bottom / Desktop floating bottom-right) */}
      {showPrompt && (
        <aside 
          aria-label="Install Chemayek's Portfolio Application"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-md animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
        >
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#141414]/95 backdrop-blur-xl border border-blue-500/30 dark:border-blue-500/40 p-4 sm:p-5 shadow-2xl shadow-blue-900/20 dark:shadow-blue-950/50">
            
            {/* Subtle glowing ambient accent */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
            
            {/* Close button */}
            <button
              onClick={handleDismissBanner}
              aria-label="Close install prompt"
              className="absolute top-3 right-3 p-1.5 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white bg-gray-100 dark:bg-[#202020] hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {isInstalledSuccess ? (
              /* Success State immediately on Click */
              <div className="flex items-start gap-3.5 pr-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      App Downloaded & Added!
                    </h4>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shrink-0">
                      INSTALLED
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-300 mt-1 leading-tight">
                    Chemayek Abraham's App is downloaded and ready for offline use on your device.
                  </p>
                  <div className="mt-3">
                    <button
                      onClick={handleContinueInApp}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 shadow-md shadow-emerald-600/30 transition-all"
                    >
                      <span>Continue in App</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Direct Install Card */
              <div className="flex items-start gap-3.5 pr-6">
                {/* App Icon */}
                <div className="relative shrink-0">
                  <img
                    src="/pwa-192x192.png"
                    alt="App Icon"
                    className="w-12 h-12 rounded-xl object-cover border border-blue-500/40 shadow-sm"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/profile.jpg';
                    }}
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-[9px] text-white">
                    <Sparkles className="w-2.5 h-2.5" />
                  </span>
                </div>

                {/* Text Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                      Chemayek Abraham
                    </h4>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shrink-0">
                      APP
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-300 mt-0.5 leading-tight">
                    Download & install this portfolio app for fast, 1-tap offline access.
                  </p>

                  {/* Direct Action Buttons */}
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={handleInstallClick}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Install App</span>
                    </button>
                    <button
                      onClick={handleDismissBanner}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1f1f1f] transition-colors cursor-pointer"
                    >
                      Later
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>
      )}

      {/* Full Step-by-Step Installation Instructions Modal */}
      {showStepsModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseStepsModal}
        >
          <div 
            className="relative w-full max-w-lg bg-white dark:bg-[#141414] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl p-6 sm:p-7 overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header with Title and Close Button */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/pwa-192x192.png"
                    alt="App Logo"
                    className="w-11 h-11 rounded-xl object-cover border border-blue-500/30 shadow-sm"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/profile.jpg';
                    }}
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-[9px] text-white">
                    <Sparkles className="w-2.5 h-2.5" />
                  </span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug">
                    How to Install Portfolio App
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Follow the quick steps below for your device
                  </p>
                </div>
              </div>

              <button
                onClick={handleCloseStepsModal}
                aria-label="Close modal"
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white bg-gray-100 dark:bg-[#1e1e1e] hover:bg-gray-200 dark:hover:bg-[#282828] transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Platform Selector Tabs */}
            <div className="flex items-center gap-2 mt-5 p-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-2xl">
              <button
                onClick={() => setSelectedPlatform('ios')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedPlatform === 'ios'
                    ? 'bg-white dark:bg-[#242424] text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>iOS (iPhone)</span>
              </button>
              <button
                onClick={() => setSelectedPlatform('android')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedPlatform === 'android'
                    ? 'bg-white dark:bg-[#242424] text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Android</span>
              </button>
              <button
                onClick={() => setSelectedPlatform('desktop')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedPlatform === 'desktop'
                    ? 'bg-white dark:bg-[#242424] text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>PC / Mac</span>
              </button>
            </div>

            {/* Direct Install Button if supported */}
            {deferredPrompt && (
              <div className="mt-4 p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Download className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-900 dark:text-white truncate">1-Click Direct Install</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">Your browser supports instant install</p>
                  </div>
                </div>
                <button
                  onClick={handleNativePromptFromModal}
                  className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shrink-0 shadow-md shadow-blue-600/30 transition-all cursor-pointer active:scale-95"
                >
                  Install Now
                </button>
              </div>
            )}

            {/* Step-by-Step Instructions Container */}
            <div className="mt-5 space-y-3">
              {selectedPlatform === 'ios' && (
                <>
                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div className="flex-1 min-w-0 text-xs text-gray-700 dark:text-gray-300">
                      <p className="font-semibold text-gray-900 dark:text-white mb-0.5">Open in Safari & Tap Share</p>
                      <p className="leading-relaxed">
                        Tap the <strong className="text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 font-medium"><Share className="w-3.5 h-3.5" /> Share</strong> button at the bottom navigation bar of Safari.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="flex-1 min-w-0 text-xs text-gray-700 dark:text-gray-300">
                      <p className="font-semibold text-gray-900 dark:text-white mb-0.5">Select 'Add to Home Screen'</p>
                      <p className="leading-relaxed">
                        Scroll down the share sheet and tap <strong className="text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 font-medium"><PlusSquare className="w-3.5 h-3.5" /> Add to Home Screen</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div className="flex-1 min-w-0 text-xs text-gray-700 dark:text-gray-300">
                      <p className="font-semibold text-gray-900 dark:text-white mb-0.5">Tap 'Add' to Confirm</p>
                      <p className="leading-relaxed">
                        Tap <strong className="text-blue-600 dark:text-blue-400 font-medium">'Add'</strong> at the top right corner. The app icon will appear on your Home Screen!
                      </p>
                    </div>
                  </div>
                </>
              )}

              {selectedPlatform === 'android' && (
                <>
                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div className="flex-1 min-w-0 text-xs text-gray-700 dark:text-gray-300">
                      <p className="font-semibold text-gray-900 dark:text-white mb-0.5">Open Browser Menu</p>
                      <p className="leading-relaxed">
                        Tap the <strong className="text-blue-600 dark:text-blue-400 font-medium">Three Dots (⋮)</strong> menu in the top right corner of Chrome or your browser.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="flex-1 min-w-0 text-xs text-gray-700 dark:text-gray-300">
                      <p className="font-semibold text-gray-900 dark:text-white mb-0.5">Tap 'Install app' or 'Add to Home Screen'</p>
                      <p className="leading-relaxed">
                        Select <strong className="text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 font-medium"><Download className="w-3.5 h-3.5" /> Install app</strong> from the list of options.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div className="flex-1 min-w-0 text-xs text-gray-700 dark:text-gray-300">
                      <p className="font-semibold text-gray-900 dark:text-white mb-0.5">Confirm Installation</p>
                      <p className="leading-relaxed">
                        Tap <strong className="text-blue-600 dark:text-blue-400 font-medium">'Install'</strong> when the prompt appears. The app will be ready instantly.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {selectedPlatform === 'desktop' && (
                <>
                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div className="flex-1 min-w-0 text-xs text-gray-700 dark:text-gray-300">
                      <p className="font-semibold text-gray-900 dark:text-white mb-0.5">Look at the Address / URL Bar</p>
                      <p className="leading-relaxed">
                        Look at the right side of your browser's address bar for the <strong className="text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 font-medium"><Download className="w-3.5 h-3.5" /> Install</strong> icon.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="flex-1 min-w-0 text-xs text-gray-700 dark:text-gray-300">
                      <p className="font-semibold text-gray-900 dark:text-white mb-0.5">Click 'Install Chemayek Abraham'</p>
                      <p className="leading-relaxed">
                        Alternatively, open Chrome/Edge Menu (⋮) ➔ select <strong className="text-blue-600 dark:text-blue-400 font-medium">'Cast, save and share'</strong> ➔ <strong className="text-blue-600 dark:text-blue-400 font-medium">'Install page as app'</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div className="flex-1 min-w-0 text-xs text-gray-700 dark:text-gray-300">
                      <p className="font-semibold text-gray-900 dark:text-white mb-0.5">Ready for Fast Offline Launch</p>
                      <p className="leading-relaxed">
                        Click <strong className="text-blue-600 dark:text-blue-400 font-medium">'Install'</strong>. The standalone app window will launch and pin to your Dock or Taskbar!
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Close / Got it Button */}
            <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-800/80">
              <button
                onClick={handleCloseStepsModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-600/25 transition-all cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Got it, Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

