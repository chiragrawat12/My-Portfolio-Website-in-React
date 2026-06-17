import { useRef } from "react";

function useDragScroll() {
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    const slider = scrollRef.current;
    if (!slider) return;

    isDown.current = true;
    isDragging.current = false;
    slider.classList.add("dragging");
    startX.current = e.pageX - slider.offsetLeft;
    scrollLeft.current = slider.scrollLeft;
  };

  const endDrag = () => {
    const slider = scrollRef.current;
    isDown.current = false;
    setTimeout(() => {
      isDragging.current = false;
    }, 0);
    if (slider) slider.classList.remove("dragging");
  };

  const onMouseMove = (e) => {
    const slider = scrollRef.current;
    if (!isDown.current || !slider) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX.current;

    if (Math.abs(walk) > 5) {
      isDragging.current = true;
    }

    slider.scrollLeft = scrollLeft.current - walk;
  };

  const onClickCapture = (e) => {
    if (isDragging.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return {
    scrollRef,
    dragHandlers: {
      onMouseDown,
      onMouseLeave: endDrag,
      onMouseUp: endDrag,
      onMouseMove,
      onClickCapture,
    },
  };
}

export default useDragScroll;