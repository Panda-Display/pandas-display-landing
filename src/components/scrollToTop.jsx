import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location object from React Router
  const { pathname } = useLocation();

  // Run this effect whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array ensures it runs on route change

  // This component doesn't render anything
  return null;
}

export default ScrollToTop;