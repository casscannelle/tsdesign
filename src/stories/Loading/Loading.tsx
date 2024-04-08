//Alterado para tipo condicional

import React from "react";
import "./Loading.css";

type LoadingType = "spinner" | "text"; 

interface LoadingProps {
  type: LoadingType;
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ type, message }) => {
  const Content =
    type === "spinner"
      ? () => <div className="loading loading-spinner" />
      : () => <div className="loading loading-text">{message}</div>;

  return <Content />;
};

export default Loading;