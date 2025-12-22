import { useEffect, useState } from "react";

type Breakpoint = "sm" | "lg";

const breakpoints: Record<Breakpoint, number> = {
  sm: 640,
  lg: 1024,
};

export function useTailwindBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("sm");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;

      if (width >= breakpoints.sm) return setBreakpoint("lg");
      return setBreakpoint("sm");
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}
