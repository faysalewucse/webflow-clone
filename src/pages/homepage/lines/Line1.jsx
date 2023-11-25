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
        width="10"
        height="700"
        viewBox="0 0 5 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define the gradient */}
        <defs>
          <linearGradient
            id="paint0_linear_1_10"
            x1="1.76519"
            y1="0.5"
            x2="1.76519"
            y2="748.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#080808" />
            <stop offset="0.484375" stopColor="#555555" />
            <stop offset="1" stopColor="#080808" />
          </linearGradient>
        </defs>
        {/* Use the path with the gradient stroke */}
        <path
          d="M14 0.5L2.00005 449C-2.16662 523.833 14.8001 616.5 52.0001 748.5"
          stroke="url(#paint0_linear_1_10)"
          strokeWidth="3"
        />
        {/* Animate a shape along the path */}
        <rect id="light" x="-2" y="0" width="5" height="150" fill="#0055D4">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath href="#light-path" />
          </animateMotion>
        </rect>
        {/* Define the path for animation */}
        <path
          id="light-path"
          d="M14 0.5L2.00005 449C-2.16662 523.833 14.8001 616.5 52.0001 748.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default LightRunning;
