// ScrollToHash.js
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();
  const prevHash = useRef(hash);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (!hash) return;

    const isNewPage = pathname !== prevPathname.current;
    const isNewHash = hash !== prevHash.current;

    // Scroll to hash element — delay longer if it's a new page (needs time to render)
    const delay = isNewPage ? 300 : 80;

    const timer = setTimeout(() => {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, delay);

    prevHash.current = hash;
    prevPathname.current = pathname;

    return () => clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}