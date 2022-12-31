import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-4xl sm:text-5xl text-gray-900 font-bold sm:whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16 ml-4 mr-4">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
