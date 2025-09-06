"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function SpringWrapper({ children, from = { opacity: 0, transform: 'translateY(40px)' }, to = { opacity: 1, transform: 'translateY(0px)' }, delay = 0, className }) {
  const spring = useSpring({ from, to, delay });
  return (
    <animated.div style={spring} className={className}>
      {children}
    </animated.div>
  );
}
