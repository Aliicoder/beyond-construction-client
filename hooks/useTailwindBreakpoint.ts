import { useEffect, useState } from "react";

type Breakpoint = "sm" | "md" | "lg";

const breakpoints: Record<Breakpoint, number> = {
  sm: 770,
  md: 1024,
  lg: 1280,
};

export function useTailwindBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("sm");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.sm) return setBreakpoint("md");
      if (width >= breakpoints.md) return setBreakpoint("lg");
      return setBreakpoint("sm");
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}
