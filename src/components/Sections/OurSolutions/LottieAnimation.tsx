"use client";

import { useLottie } from "lottie-react";
import animationData from "../../../../public/animations/Synopp.json";

const LottieAnimation = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return <div className="lottie">{View}</div>;
};

export default LottieAnimation; 