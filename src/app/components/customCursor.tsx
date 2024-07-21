'use client'
import React, { useEffect, useRef, useState } from 'react';

const CURSOR_COLORS: { [key: string]: string } = {
  "h1": "blue-800",
  "button": "orange-500",
  "default": "sky-500"
};

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const clickRef = useRef<HTMLDivElement | null>(null);
  const [cursorColor, setCursorColor] = useState<string>("sky-500");
  const [clicked, setClicked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true); // Add state to manage visibility

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 800);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      
      if (tagName === 'button') {
        setIsVisible(false); // Hide cursor when hovering over button
      }
      else if (tagName === 'p'){
        setIsVisible(false);
      }
       else {
        setIsVisible(true); // Show cursor for other elements
        setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
      }
    };

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) / 6;
      cursorY += (mouseY - cursorY) / 6;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      }
      if (clickRef.current) {
        clickRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(updateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    updateCursor(); // Start the animation loop

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none transition-transform duration-[30ms] z-50 rounded-full w-3 h-3 bg-${cursorColor} ${isVisible ? '' : ''}`}
      />
      <div
        ref={clickRef}
        className={`${clicked ? "w-6 h-6 opacity-30" : "scale-100 opacity-100"} fixed pointer-events-none transition-transform duration-[40ms] z-50 rounded-full w-11 h-11  border-[3px] border-${cursorColor} ${isVisible ? '' : 'opacity-20 w-16 h-16'}`}
      >
        {/* <div
          className={`w-8 h-8 ${clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"} rounded-full bg-${cursorColor} ease-in transition-all duration-500`}
        /> */}
      </div>
    </>
  );
};

export default CustomCursor;
