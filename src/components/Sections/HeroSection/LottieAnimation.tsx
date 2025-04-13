"use client";

import { useLottie } from "lottie-react";
import HeroAnimation from "../../../../public/animations/Hero.json";
import HeroAnimation2 from "../../../../public/animations/Hero_lines.json";

const LottieAnimation = () => {
  const defaultOptions = {
    animationData: HeroAnimation,
    loop: false,
  };
  const defaultOptions2 = {
    animationData: HeroAnimation2,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);
  const { View: View2 } = useLottie(defaultOptions2);

  return (
    <>
      <div className="lottie">{View}</div>
      <div className="lottie absolute top-0 left-0 w-full h-full z-[-1]">{View2}</div>
    </>
  );
};

export default LottieAnimation; 