import React from "react";
import Loading, { LoadingType } from "./Loading";

export default {
  title: "Components/Loading",
};

export const Spinner = () => <Loading type={LoadingType.SPINNER} />;
export const Text = () => (
  <Loading type={LoadingType.TEXT} message="Carregando..." />
);
