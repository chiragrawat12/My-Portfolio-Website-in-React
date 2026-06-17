import { useEffect, useRef, useState } from "react";

function useRevealOnScroll(threshold = 0.2) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const safeThreshold =
      typeof threshold === "number" && Number.isFinite(threshold)
        ? threshold
        : 0.2;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: safeThreshold }
    );

    const currentRef = ref.current;

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return [ref, show];
}

export default useRevealOnScroll;