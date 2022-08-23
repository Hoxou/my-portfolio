import "../styles/projectCard.less";


const ProjectCard = (props) => {
    return (
        <div className="card">
            <div className="image">
                <img src={props.image} />
            </div>
            <h1>{props.name}</h1>
            <div style={{ display: "flex", gap: 8 }}>
                <h3>Rôles :</h3>
                <h3 className="role">{props.role}</h3>
            </div>
            <p className="desc">{props.description}</p>
            <button>voir en détails</button>
        </div>
    );

}

export default ProjectCard;