import React from "react";
import Lottie from "react-lottie";
import LinkedInSocial from "./assets/Icon(1).json";
import GitHubSocial from "./assets/Icon.json";
import TwitterSocial from "./assets/Icon(2).json";

export const GitHubIcon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GitHubSocial,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={40} width={40} />
    </>
  );
};

export const LinkedInIcon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LinkedInSocial,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={40} width={40} />
    </>
  );
};

export const TwitterIcon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TwitterSocial,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={40} width={40} />
    </>
  );
};
