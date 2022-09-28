import "../styles/projectDetails.less";
import Header from "../components/Header"
import { projects as projectsData } from "../data/data.json";
import { projects as swot } from "../data/data.json";
import { Link } from 'preact-router/match'

export default function ProjectDetails(props) {
    const project = projectsData[props.id];
    let swot = projectsData[props.id].categories.enjeux[2].swot;
    const backIcon = "<"
    console.log(swot);

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
                    <p className="analysis-desc">{project.categories.enjeux[1].description}</p>

                    <div className="swot">
                    {swot.map(category => {
                        return (
                            <>
                                <div className="swot-category">
                                <h3>{category.name}</h3>
                                <ul>
                                    {category.list.map(description => {
                                        return (
                                            <li className="description">{description}</li>
                                        )
                                    })}
                                </ul>
                                </div>
                                <div className="vl"></div>
                            </>
                        )
                    })}
                    </div>
                </div>
                
                <div className="enjeux-img">
                    <img src={project.categories.enjeux[1].img} />
                </div>
               
                
                
               

            </div>

            {/*2. le début du projet*/}
            <div id="lUI">

            </div>




        </div>
       


    </div>
  )
}



/*

 
*/