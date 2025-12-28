import { RefObject } from "react";

export const trackElementHeight = (
  reference: RefObject<HTMLElement | null>,
  property: string
) => {
  if (!reference.current) return;

  const handleResize = () => {
    const height = reference.current!.clientHeight;
    console.log(height);
    document.documentElement.style.setProperty(property, `${height}px`);
  };

  handleResize();

  const resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(reference.current);

  return () => resizeObserver.disconnect();
};
