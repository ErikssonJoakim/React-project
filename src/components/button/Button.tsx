import React from "react";
import "./button.scss";

type ButtonProps = Readonly<{
  name: string;
  onClick: () => void;
  buttonClassName?: string;
}>;

const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  buttonClassName,
}: ButtonProps) => {
  const classNames = (): string =>
    buttonClassName ? `btn ${buttonClassName}` : "btn";
  return (
    <button className={classNames()} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
