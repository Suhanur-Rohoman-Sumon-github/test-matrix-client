import { useEffect } from "react";

export const useExamSecurity = () => {
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        alert("Screenshots are not allowed!");
        // Optionally overlay a black div or redirect user
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "black";
        overlay.style.zIndex = "999999";
        document.body.appendChild(overlay);

        setTimeout(() => {
          document.body.removeChild(overlay);
        }, 3000); // remove overlay after 3 sec
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    // Disable text selection styles
    document.body.style.userSelect = "none";

    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    // Block some keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ["c", "x", "v", "a", "s", "p"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
      ) {
        e.preventDefault();
      }
    };

    // Warn on tab switching or hiding window
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert("Tab switching is not allowed!");
      }
    };

    // Warn before unload (refresh or close)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Fullscreen enforcement
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        alert("You must stay in fullscreen mode during the exam!");
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    document.documentElement.requestFullscreen().catch(() => {
      alert("Please allow fullscreen mode to start the exam.");
    });

    return () => {
      document.body.style.userSelect = "";
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      if (document.fullscreenElement) document.exitFullscreen();
    };
  }, []);
};
