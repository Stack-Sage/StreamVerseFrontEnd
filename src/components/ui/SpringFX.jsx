"use client";
import React from "react";
import { useSpring, useSprings, useTrail, animated, config } from "@react-spring/web";

// General purpose animation wrapper for Home components
export function SpringFX({
  children,
  type = "fade", // fade, scale, bounce, trail, etc.
  delay = 0,
  duration = 500,
  from,
  to,
  configOverride,
  className,
  ...rest
}) {
  let springProps = {};
  let springConfig = configOverride || config.default;

  switch (type) {
    case "fade":
      springProps = useSpring({
        from: from || { opacity: 0 },
        to: to || { opacity: 1 },
        delay,
        config: springConfig,
      });
      break;
    case "scale":
      springProps = useSpring({
        from: from || { scale: 0.8, opacity: 0 },
        to: to || { scale: 1, opacity: 1 },
        delay,
        config: springConfig,
      });
      break;
    case "bounce":
      springProps = useSpring({
        from: from || { scale: 0.7, opacity: 0 },
        to: to || { scale: 1, opacity: 1 },
        delay,
        config: config.wobbly,
      });
      break;
    case "slideUp":
      springProps = useSpring({
        from: from || { opacity: 0, y: 40 },
        to: to || { opacity: 1, y: 0 },
        delay,
        config: springConfig,
      });
      break;
    case "trail":
      // For lists, useTrail can be used externally
      springProps = {};
      break;
    default:
      springProps = useSpring({
        from: from || { opacity: 0 },
        to: to || { opacity: 1 },
        delay,
        config: springConfig,
      });
  }

  return (
    <animated.div style={springProps} className={className} {...rest}>
      {children}
    </animated.div>
  );
}

// Example: useSpringFX for hover/click
export function useSpringFX({ type = "scale", from, to, configOverride }) {
  return useSpring({
    from: from || { scale: 1 },
    to: to || { scale: 1.08 },
    config: configOverride || config.stiff,
  });
}
