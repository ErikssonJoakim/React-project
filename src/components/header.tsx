type HeaderProps = {
    header: string
    description: string
}

const Header: React.FC<HeaderProps> = ({header, description}: HeaderProps) => (
    <div>
        <h1>{header}</h1>
        <p>{description}</p>
    </div>
)

export default Header