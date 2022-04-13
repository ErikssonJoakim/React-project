type ButtonProps = {
    name: string
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({name, onClick}: ButtonProps) => (
    <button onClick={onClick}>{name}</button>
)

export default Button