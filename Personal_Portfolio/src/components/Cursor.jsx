import { useEffect, useRef } from "react";

export default function ProCursor() {

  const cursorRef = useRef(null);

  const followerRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let posX = 0;
    let posY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + "px";
        cursorRef.current.style.top = mouseY + "px";
      }
    };

    const animate = () => {
      posX += (mouseX - posX) * 0.1;
      posY += (mouseY - posY) * 0.1;

      if (followerRef.current) {
        followerRef.current.style.left = posX + "px";
        followerRef.current.style.top = posY + "px";
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", moveMouse);
    animate();

    const hoverElements = document.querySelectorAll("a, button");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        followerRef.current.classList.add("scale-150");
      });

      el.addEventListener("mouseleave", () => {
        followerRef.current.classList.remove("scale-150");
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveMouse);
    };
    
  }, []);

  return (
    <>
      {/* Main Cursor here */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-white rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50"
      ></div>

      {/* Cursor Follower here */}
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border border-white rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 z-40"
      ></div>
    </>
  );
}