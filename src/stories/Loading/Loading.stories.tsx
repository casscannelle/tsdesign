import Loading from "./Loading";

export default {
  title: "Components/Loading",
};

const SpinnerStory = () => <Loading type="spinner" />;
export const Spinner = SpinnerStory.bind({});

const TextStory = (args: { message: string }) => <Loading type="text" message={args.message} />;
export const Text = TextStory.bind({});
Text.args = {
  message: "Carregando...",
};