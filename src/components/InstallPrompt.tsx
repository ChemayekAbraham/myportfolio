import React, { useEffect, useState } from 'react';
import { Download, X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalledSuccess, setIsInstalledSuccess] = useState(false);

  useEffect(() => {
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

    // Trigger prompt after 800ms for first-time visitors (desktop & mobile)
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
    if (!deferredPrompt) {
      return;
    }

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      // ONLY show success when the user actually accepts and confirms the install dialog
      if (choiceResult && choiceResult.outcome === 'accepted') {
        setIsInstalledSuccess(true);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.8 },
          colors: ['#3b82f6', '#10b981', '#60a5fa', '#ffffff']
        });
        localStorage.setItem('pwa_app_installed', 'true');
      } else {
        // User cancelled or dismissed the install prompt
        setShowPrompt(false);
        sessionStorage.setItem('pwa_install_dismissed_session', 'true');
      }
    } catch (err) {
      console.error('Install prompt error:', err);
      setShowPrompt(false);
    } finally {
      setDeferredPrompt(null);
    }
  };

  const handleContinueInApp = () => {
    setShowPrompt(false);
    sessionStorage.setItem('pwa_install_dismissed_session', 'true');
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    sessionStorage.setItem('pwa_install_dismissed_session', 'true');
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <>
      {/* Installation Alert Card (Mobile bottom / Desktop floating bottom-right) */}
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
            /* Direct 1-Click Install Card */
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
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-600/30 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Install App</span>
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
          )}
        </div>
      </aside>
    </>
  );
};
