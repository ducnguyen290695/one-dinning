import { debounce } from "lodash";
import { useEffect, useState } from "react";

const useResponsive = () => {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLaptop: false,
    windowHeight: 0,
    windowWidth: 0,
  });

  const onResizeHandler = () => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    const isLaptop = window.innerWidth > 990 && window.innerWidth <= 1560;
    const isDesktop = window.innerWidth > 1560;

    setState({
      isMobile,
      isTablet,
      isDesktop,
      isLaptop,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  };

  const debouncedCall = debounce(onResizeHandler, 300);
  const setup = () => {
    window.addEventListener("resize", debouncedCall, false);
  };

  const cleanup = () => {
    window.removeEventListener("resize", debouncedCall, false);
  };

  useEffect(() => {
    onResizeHandler();

    setup();

    return () => {
      cleanup();
    };
  }, []);

  return state;
};

export default useResponsive;
