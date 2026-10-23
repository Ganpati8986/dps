import React, { useEffect, useState } from "react";

const ProtectedImage = ({
  src,
  alt,
  watermark = "Protected",
  className,
  referrerPolicy
}) => {
  const [blur, setBlur] = useState(false);

  useEffect(() => {

    const disableRightClick = (e) => {
      e.preventDefault();
    };

    const disableDrag = (e) => {
      e.preventDefault();
    };

    const disableCopy = (e) => {
      e.preventDefault();
    };

    const disableKeys = (e) => {
      const key = e.key.toLowerCase();

      if (
        key === "printscreen" ||
        (e.ctrlKey && ["s", "u", "c", "x"].includes(key)) ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
        key === "f12"
      ) {
        e.preventDefault();
        alert("Action not allowed");
      }
    };

    const handlePrintScreen = async (e) => {
      if (e.key === "PrintScreen") {
        try {
          await navigator.clipboard.writeText("");
        } catch (err) {}

        setBlur(true);

        setTimeout(() => {
          setBlur(false);
        }, 2000);
      }
    };

    const visibilityChange = () => {
      if (document.hidden) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    };

    const detectDevTools = setInterval(() => {
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      if (widthDiff > 160 || heightDiff > 160) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    }, 800);

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("dragstart", disableDrag);
    document.addEventListener("copy", disableCopy);
    document.addEventListener("keydown", disableKeys);
    document.addEventListener("keyup", handlePrintScreen);
    document.addEventListener("visibilitychange", visibilityChange);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("keydown", disableKeys);
      document.removeEventListener("keyup", handlePrintScreen);
      document.removeEventListener("visibilitychange", visibilityChange);
      clearInterval(detectDevTools);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        userSelect: "none"
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable="false"
        className={className}
        referrerPolicy={referrerPolicy}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          pointerEvents: "none",
          filter: blur ? "blur(20px)" : "none"
        }}
      />

      {/* Strong Watermark Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none"
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            style={{
              transform: "rotate(-30deg)",
              fontSize: "24px",
              color: "rgba(255,255,255,0.25)",
              fontWeight: "bold",
              margin: "40px"
            }}
          >
            {watermark}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProtectedImage;