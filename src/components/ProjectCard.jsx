import "../styles/projectCard.less";


const ProjectCard = () => {
    return (
        <div className="card">
            <span className="image"></span>
            <h1>Project name</h1>
            <div style={{ display:"flex", gap: 8 }}>
                <h3>Rôle :</h3>
                <h3 className="role">ABC</h3>
            </div>
            <p className="desc">Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et ...</p>
            <button>voir en détails</button>
        </div>
    );

}

export default ProjectCard;