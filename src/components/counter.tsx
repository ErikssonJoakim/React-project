type CounterProps = {
    value: number
    message?: string
}

const Counter: React.FC<CounterProps> = ({value, message}: CounterProps) => (
    <>
        <h3>{value}</h3>
        {message && <p>{message}</p>}
    </>
    
)

export default Counter