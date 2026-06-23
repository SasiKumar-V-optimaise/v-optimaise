// src/ScrollToTop.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // If there's a hash, let ScrollToHash handle it — don't scroll to top
    if (hash) {
      prevPathname.current = pathname;
      return;
    }

    // Only scroll to top when the pathname actually changes (new page),
    // not on same-page re-renders or hash-only changes
    if (pathname !== prevPathname.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      prevPathname.current = pathname;
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
