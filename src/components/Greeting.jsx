const Greeting = () => {
    const name = "Kawanser"
    return (
        <div>
            <h1>Hi, {name}! Today is:</h1>
            <p>{Date()}</p>
        </div>
    )
}

export default Greeting;