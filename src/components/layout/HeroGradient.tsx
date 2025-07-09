import { useEffect } from "react";

declare global {
  interface Window {
    Gradient: any;
  }
}

export default function HeroGradient() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/vallafederico/glsl-gradient-webflow@master/lib/gradient.02.js";
    script.async = true;
    script.onload = () => {
      if (window.Gradient) {
        window.Gradient.call("mode", "light");
      }
    };
    document.body.appendChild(script);
  }, []); 

  return (
    <div className="absolute h-screen w-screen">
      <canvas
        id="c"
        data-gradient="wrapper"
        data-multx="2"
        data-multy="2"
        data-hue="180"
        data-brightness="0.8"
        data-mouse="-2"
        data-scale="1"
        data-noise="1.5"
        data-time="0.2"
        className="absolute inset-0 z-0 h-screen w-screen"
      />
    </div>
  );
}
