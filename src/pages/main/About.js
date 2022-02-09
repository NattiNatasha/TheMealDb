function About ({text}) {
    return (
        <div className="wrap">
            <h2>{text.title}</h2>
            <p style={{textAlign: "center"}}>{text.description}</p>
        </div>
    )
}

export default About;