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
                <div className="blue-container">
                    <div>
                        <h1 className="title">1. Les enjeux</h1>
                        <p className="description">{project.categories.enjeux[0].description}</p>
                    </div>
                    <img src={project.categories.enjeux[0].img} />
                </div>

                <div className="analysis">
                    <h2 className="subtitle">· Analyse compétitive</h2>
                    <p className="description">{project.categories.enjeux[1].description}</p>

                    <div className="swot">
                        <div className="swot-category" style={{borderRight:"1px solid #B1BEEB"}}>
                            <h3>Strengths</h3>
                            <ul>
                                <li className="description">1</li>
                                <li className="description">2</li>
                                <li className="description">3</li>
                            </ul>
                        </div>
                        <div className="swot-category" style={{borderRight:"1px solid #B1BEEB"}}>
                            <h3>Weaknesses</h3>
                            <ul>
                                <li className="description">1</li>
                                <li className="description">2</li>
                                <li className="description">3</li>
                            </ul>
                        </div>
                        <div className="swot-category" style={{borderRight:"1px solid #B1BEEB"}}>
                            <h3>Opportunities</h3>
                            <ul>
                                <li className="description">1</li>
                                <li className="description">2</li>
                                <li className="description">3</li>
                            </ul>
                        </div>
                        <div className="swot-category">
                            <h3>Threats</h3>
                            <ul>
                                <li className="description">1</li>
                                <li className="description">2</li>
                                <li className="description">3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                
               

            </div>

            {/*2. le début du projet*/}
            <div id="lUI">

            </div>




        </div>
       


    </div>
  )
}