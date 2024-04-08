import Loading from "./Loading";

export default {
  title: "Components/Loading",
};

type TextStoryArgs = {
  message: string;
};

const TextStory = (args: TextStoryArgs) => <Loading type="text" message={args.message} />;

export const Spinner = () => <Loading type="spinner" />;
export const Text = TextStory.bind({});
Text.args = {
  message: "Carregando...",
};