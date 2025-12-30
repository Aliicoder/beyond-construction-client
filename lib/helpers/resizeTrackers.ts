import { RefObject } from "react";

export const trackElementDimensions = (
  reference: RefObject<HTMLElement | null>,
  property: string
) => {
  if (!reference.current) return;

  const handleResize = () => {
    const height = reference.current!.clientHeight;
    const width = reference.current!.clientWidth;
    console.log(height, width);
    document.documentElement.style.setProperty(
      property + "-height",
      `${height}px`
    );
    document.documentElement.style.setProperty(
      property + "-width",
      `${width}px`
    );
  };

  handleResize();

  const resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(reference.current);

  return () => resizeObserver.disconnect();
};
