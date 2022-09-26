import "../styles/projectDetails.less";
import Header from "../components/Header"
import { projects as projectsData } from "../data/data.json";
import { Link } from 'preact-router/match'

export default function ProjectDetails(props) {
    const project = projectsData[props.id];
    const backIcon = "<"


  return (
    <div className="projectDetails">
        <Header />
        <div className="container">



            {/*le header avec toutes les infos*/}
            <div className="header">
                <Link href="/projets"><button className="back-btn">{backIcon}</button>
                </Link>
                <h1>{project.name}</h1>
            </div>

            <div className="infos-generales">
                <div className="category">
                    <b>Description</b>
                    <p>{project.description}</p>
                </div>
                <div style={{width:"100%"}}>
                    <div className="category">
                        <b>Rôles / Résponsabilités</b>
                        <p>{project.roles.join(", ")}</p>
                    </div>
                    <div className="category">
                        <b>Durée</b>
                        <p>{project.duree}</p>
                    </div>
                </div>
                
                <div className="category">
                    <b>Outils</b>
                    <p>{project.outils.join(", ")}</p>
                </div>
            </div>

            <div className="links">
                <p>Voir : </p>
                <a href="#enjeux">Les enjeux</a>—
                <a href="#debut">Le début du projet</a>—
                <a href="#designUI">Le design d'interface</a>—
                <a href="#problemes">Les problèmes soulevés </a>—
                <a href="#conclusion">Conclusion</a>
            </div>

            {/*1. les enjeux*/}
            <div id="enjeux">

            </div>

            {/*2. le début du projet*/}
            <div id="lUI">

            </div>




        </div>
       


    </div>
  )
}