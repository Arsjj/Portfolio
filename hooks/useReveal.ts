import { CSSProperties, useEffect, useRef, useState } from "react";

type Direction = "left" | "right" | "up" | "down" | "";

type UseRevealOptions = {
  direction?: Direction;
  x?: number;
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  spring?: boolean;
  blur?: number;
};

export const useReveal = ({
  direction = "",
  x = 0,
  y = 0,
  delay = 0,
  duration = 0.75,
  once = true,
  threshold = 0.2,
  spring = false,
  blur = 0
}: UseRevealOptions = {}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold]);

  const getHiddenTransform = () => {
    // custom x/y takes priority
    if (x !== 0 || y !== 0) {
      return `translate3d(${x}px, ${y}px, 0)`;
    }

    switch (direction) {
      case "left":
        return "translate3d(100px, 0, 0)";
      case "right":
        return "translate3d(-100px, 0, 0)";
      case "up":
        return "translate3d(0, 10px, 0)";
      case "down":
        return "translate3d(0, -10px, 0)";
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  const easing = spring
    ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
    : "ease-out";

  const style: CSSProperties = {
  opacity: visible ? 1 : 0,
  transform: visible ? "translate3d(0, 0, 0)" : getHiddenTransform(),
  filter: visible ? "blur(0px)" : `blur(${blur}px)`,
  transitionProperty: "opacity, transform, filter",
  transitionDuration: `${duration}s`,
  transitionDelay: `${delay}s`,
  transitionTimingFunction: `ease-out, ${easing}, ease-out`,
  willChange: "transform, opacity, filter",
};

  return {
    ref,
    visible,
    style,
  };
};