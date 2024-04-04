import React from "react";
import "./Loading.css";

export enum LoadingType {
  SPINNER = "spinner",
  TEXT = "text",
}

interface LoadingProps {
  type: LoadingType;
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ type, message }) => {
  if (type === LoadingType.SPINNER) {
    return <div className="loading loading-spinner" />;
  }

  if (type === LoadingType.TEXT) {
    return <div className="loading loading-text">{message}</div>;
  }

  return null;
};

export default Loading;