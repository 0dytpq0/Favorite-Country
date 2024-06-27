import _ from "lodash";
import { useEffect, useState } from "react";

interface WindowSize {
  size: "sm" | "md" | "lg";
}

const checkInnerWidth = (width: number) => {
  if (width >= 1024) {
    return "lg";
  } else if (width >= 768) {
    return "md";
  } else {
    return "sm";
  }
};

const useResize = (debounceTime: number = 2000): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    size: "lg",
  });

  useEffect(() => {
    const handleResize = () => {
      const newSize = checkInnerWidth(window.innerWidth);
      checkInnerWidth(window.innerWidth);
      setWindowSize((currentSize) => {
        if (currentSize.size !== newSize) {
          return { size: newSize };
        }
        return currentSize; // 상태가 변경되지 않으면 이전 상태 반환
      });
    };

    const debouncedHandleResize = _.debounce(handleResize, debounceTime);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [debounceTime]);

  return windowSize;
};

export default useResize;
