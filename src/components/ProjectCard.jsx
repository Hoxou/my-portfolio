import "../styles/projectCard.less";
import { Link } from 'preact-router/match';


const ProjectCard = (props) => {
    return (
        <div className="card">
            <div className="image">
                <img src={props.image} />
            </div>
            <h1>{props.name}</h1>
            <div className="roles" style={{ display: "flex", gap: 8 }}>
                <h3>Rôles :</h3>
                <h3 className="role">{props.role}</h3>
            </div>
            <p className="desc">{props.description}</p>
            <Link href={"projet/"+ props.id}><button >voir en détails</button></Link >
        </div>
    );

}

export default ProjectCard;