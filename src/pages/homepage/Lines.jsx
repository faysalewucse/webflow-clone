import { useEffect } from "react";

const LightRunning = () => {
  useEffect(() => {
    const light = document.getElementById("light");

    function animateLight() {
      light.style.animation = "light-animation 5s 10s 10s ease-in-out infinite";
    }

    animateLight();
  }, []);

  return (
    <div className="absolute left-1/2 top-0">
      <svg
        width="1"
        height="773"
        viewBox="0 0 2 773"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define the gradient */}
        <defs>
          <linearGradient
            id="paint0_linear_1_7"
            x1="1.5"
            y1="0.5"
            x2="1.5"
            y2="773"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#080808" />
            <stop offset="0.484375" stopColor="#555555" />
            <stop offset="1" stopColor="#080808" />
          </linearGradient>
        </defs>
        {/* Use the path with the gradient stroke */}
        <path d="M1 0.5V773" stroke="url(#paint0_linear_1_7)" strokeWidth="3" />
        {/* Animate a rectangle along the path */}
        <rect id="light" x="-2" y="0" width="5" height="100" fill="#0055D4">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath href="#light-path" />
          </animateMotion>
        </rect>
        {/* Define the path for animation */}
        <path id="light-path" d="M1 0.5V650" fill="none" />
      </svg>
    </div>
  );
};

export default LightRunning;
