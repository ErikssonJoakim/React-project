import React from 'react'
import './button.scss'

type ButtonProps = {
  readonly name: string
  readonly onClick: () => void
  readonly buttonClassName?: string
}

const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  buttonClassName
}: Readonly<ButtonProps>) => {
  const classNames = (): string => (buttonClassName ? `btn ${buttonClassName}` : 'btn')
  return (
    <button className={classNames()} onClick={onClick}>
      {name}
    </button>
  )
}

export default Button
