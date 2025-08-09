import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-primary  font-semibold p-3 rounded-full animate-bounce z-50 "
          onClick={scrollToTop}
        >
          <BiUpArrowAlt className="text-3xl text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
