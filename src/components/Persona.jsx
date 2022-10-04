import "../styles/persona.less";

const Persona = (props) => {
    const comportements = props.comportements;
    const objectifs = props.objectifs;
    const points = props.points;
    const motivations = props.motivations;
    const personnalite = props.personnalite;


    return (
        <div className="per-container">
            <div className="col">
                <img src={props.img} />
                <h2>{props.name}</h2>
                <div className="per-info">
                    <img className="icon" src="/images/cake.svg" />
                    <h3>{props.age}</h3>
                </div>
                <div className="per-info">
                    <img className="icon" src="/images/pin.svg" />
                    <h3>{props.location}</h3>
                </div>
                <p className="per-quote">{props.quote}</p>
                <h3>Description</h3>
                <p>{props.description}</p>
            </div>

            <div className="col">
                <h3>Comportements</h3>
                <ul>
                    {comportements?.map(comportement => {
                        return (
                            <li>{comportement}</li>
                        )
                    })}
                </ul>
                <h3>Objectifs</h3>
                <ul>
                    {objectifs?.map(objectif => {
                        return (
                            <li>{objectif}</li>
                        )
                    })}
                </ul>
                <h3>Points faibles</h3>
                <ul>
                    {points?.map(point => {
                        return (
                            <li>{point}</li>
                        )
                    })}
                </ul>
            </div>


            <div className="col">
                <h3>Personnalité</h3>
                {personnalite.map(per => {
                    let pointerStyle = "left : "+ per.rate;
                    return (
                            <div className="graph-container">
                                <div className="titles">
                                    <p>{per.name[0]}</p>
                                    <p>{per.name[1]}</p>
                                </div>
                                <div className="graph">
                                    <div className="pointer" style={pointerStyle}></div>
                                </div>
                            </div>
                    )
                })}

                <h3>Motivations</h3>
                <div className="tags">
                    {motivations?.map(motivation => {
                        return (
                            <div className="tag">{motivation}</div>
                        )
                    })}
                </div>
                    
                
            </div>
        </div>
    )
}
export default Persona;