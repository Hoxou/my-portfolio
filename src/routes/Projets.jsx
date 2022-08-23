import "../styles/projets.less"
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { projects as projectsData } from "../data/data.json";

export default function Projets(props) {
  return (
    <div className="projets">
      <div style={{ zIndex: 10 }}>
        <Header />
      </div>
      <div className="container">
        {//need to do a .map of all the <ProjectCard> and show the card with the right data

          projectsData.map(project => {
            return (
              <ProjectCard
                name={project.name}
                role={project.roles.join(" - ")}
                description={project.description} 
                image={project.img}/>
            )
          })
        }
      </div>



    </div>
  )
}