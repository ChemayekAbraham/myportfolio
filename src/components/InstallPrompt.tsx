import React, { useEffect, useState } from 'react';
import { Download, X, Smartphone, Share2, PlusSquare, Sparkles } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    // Check if already running in standalone mode (already installed & opened as PWA)
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

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Handler for native beforeinstallprompt (Android, Chrome, Edge)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Reveal prompt after 800ms on first opening
      setTimeout(() => {
        setShowPrompt(true);
      }, 800);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // On iOS Safari, beforeinstallprompt doesn't fire, so trigger prompt after 1.2s on mobile view
    if (isIosDevice) {
      const timer = setTimeout(() => {
        // Only trigger on mobile viewports (< 768px)
        if (window.innerWidth < 768) {
          setShowPrompt(true);
        }
      }, 1200);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }

    if (!deferredPrompt) {
      return;
    }

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    } catch (err) {
      console.error('Install prompt error:', err);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setShowIOSGuide(false);
    sessionStorage.setItem('pwa_install_dismissed_session', 'true');
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <>
      {/* Mobile Alert Overlay / Bottom Card */}
      <aside 
        aria-label="Install Chemayek's Portfolio Application"
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-md animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
      >
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#141414]/95 backdrop-blur-xl border border-blue-500/30 dark:border-blue-500/40 p-4 sm:p-5 shadow-2xl shadow-blue-900/20 dark:shadow-blue-950/50">
          
          {/* Subtle glowing ambient accent */}
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
          
          {/* Close button */}
          <button
            onClick={handleDismiss}
            aria-label="Close install prompt"
            className="absolute top-3 right-3 p-1.5 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white bg-gray-100 dark:bg-[#202020] hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {!showIOSGuide ? (
            <div className="flex items-start gap-3.5 pr-6">
              {/* App Icon */}
              <div className="relative shrink-0">
                <img
                  src="/pwa-192x192.png"
                  alt="App Icon"
                  className="w-12 h-12 rounded-xl object-cover border border-blue-500/40 shadow-sm"
                  onError={(e) => {
                    // Fallback to profile image if pwa-192x192 not yet cached
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
                  Install this portfolio app on your device for fast, 1-tap offline access.
                </p>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={handleInstallClick}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-600/30 transition-all"
                  >
                    {isIOS ? (
                      <>
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>How to Install</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Install App</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1f1f1f] transition-colors"
                  >
                    Later
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* iOS Safari Step-by-Step Guide */
            <div className="space-y-3 pr-4">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Smartphone className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  Install on iPhone / iPad:
                </h4>
              </div>
              <ol className="space-y-2 text-xs text-slate-700 dark:text-gray-300 pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    1
                  </span>
                  <span>
                    Tap the <strong>Share</strong> button <Share2 className="w-3.5 h-3.5 inline mx-1 text-blue-500" /> at the bottom of Safari.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    2
                  </span>
                  <span>
                    Scroll down and tap <strong>Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-1 text-blue-500" />.
                  </span>
                </li>
              </ol>
              <div className="pt-1 text-right">
                <button
                  onClick={handleDismiss}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Got it!
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
