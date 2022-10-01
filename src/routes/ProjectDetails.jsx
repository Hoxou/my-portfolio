import "../styles/projectDetails.less";
import Header from "../components/Header"
import { projects as projectsData } from "../data/data.json";
import { projects as swot } from "../data/data.json";
import { Link } from 'preact-router/match'

export default function ProjectDetails(props) {
    const project = projectsData[props.id];
    let swot = projectsData[props.id].categories.enjeux[2].swot;
    let problemes = projectsData[props.id].categories.problemes[1].problemes;
    const backIcon = "<";

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
                    <p className="desc">{project.categories.enjeux[1].description}</p>

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
            <div id="debut">
                <div className="blue-container">
                    <div>
                        <h1 className="title">2. Le début du projet</h1>
                        <p className="description">{project.categories.debut[0].description}</p>
                    </div>
                </div>

                <div className="peronas">
                    <div className="info">
                            <h2 className="subtitle">· Personas</h2>
                            <p className="desc">{project.categories.debut[1].description}</p>
                        
                    </div>

                    {/*add loop to show personas here*/}



                    <h2 className="subtitle" style={{marginTop:300}}>· Tasks flow</h2>
                    <p className="desc">{project.categories.debut[3].description}</p>

                    <div className="bg-img">
                        <img src={project.categories.debut[3].img} />
                    </div>

                    <div className="info">
                        <h2 className="subtitle" style={{marginTop:300}}>· Wireframing / Low-fidelity </h2>
                        <p className="desc">{project.categories.debut[4].description}</p>
                    </div>

                    <div className="bg-img">
                        <div className="wireframes-container">
                        {project.categories.debut[4].wireframes.map(wireframe => {
                            return (
                                <div className="wireframe-container">
                                    <div className="wr-images">
                                    {wireframe.img.map(wr => {
                                        
                                        return (
                                            <div className="img-test">
                                                <img src={wr}/>
                                            </div>
                                                
                                        )
                                    })}
                                    </div>
                                    <p>{wireframe.description}</p>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    

                </div>
            </div>


            {/*3. l'UI*/}
            <div id="designUI">
                <div className="blue-container">
                    <div>
                        <h1 className="title">3. Le design d’interface</h1>
                        <p className="description">{project.categories.designUI[0].description}</p>
                    </div>
                </div>

                <div className="challenge">
                    <div className="info">
                            <h2 className="subtitle">· App : Le Challenge</h2>
                            <p className="desc">{project.categories.designUI[1].description}</p>
                    </div>
                    <img src={project.categories.designUI[1].img} />
                </div>
                <div className="goal">
                    <div className="info">
                        <h2 className="subtitle">· Le Goal</h2>
                        <p className="desc">{project.categories.designUI[2].description}</p>
                    </div>
                </div>
                <div className="concretisation">
                    <div className="info">
                        <h2 className="subtitle">· Desktop : La concrétisation</h2>
                        <p className="desc">{project.categories.designUI[3].description}</p>
                    </div>
                    <img src={project.categories.designUI[3].img[0]} />
                    <img src={project.categories.designUI[3].img[1]} />
                </div>
               

            </div>



            {/*3. problemes*/}
            <div id="problemes">
                <div className="blue-container">
                    <div>
                        <h1 className="title">4. Les problèmes soulevés</h1>
                        <p className="description">{project.categories.problemes[0].description}</p>
                    </div>
                </div>

                <div className="problemes">
                    {problemes.map(prob => {
                        return (
                            <div className="probleme">
                                <h2 className="subtitle">· {prob.title}</h2>
                                <div className="avant-apres">
                                    <div className="avant">
                                        <h3>Avant</h3>
                                        <img src={prob.img[0]} />
                                    </div>
                                    <div className="apres">
                                        <h3>Après</h3>
                                        <img src={prob.img[1]} />
                                    </div>
                                </div>
                                <p className="desc">{prob.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>




        </div>
       


    </div>
  )
}



/*

 
*/