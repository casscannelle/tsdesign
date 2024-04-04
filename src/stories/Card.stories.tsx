import Card from "./Card";
import type { CardProps } from "./CardProps";

const textCard: CardProps = {
  title: "Título",
  description: "Card para texto",
};

const imageCard: CardProps = {
  title: "Título",
  imageSrc: "https://via.placeholder.com/300x200.png?text=Card+Image",
  description: "Card para texto e imagem",
};

export default {
  title: "Card",
};

export const Text = () => <Card {...textCard} />;
export const Image = () => <Card {...imageCard} />;
