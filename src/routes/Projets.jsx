import "../styles/projets.less"
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

export default function Projets(props) {
  return (
    <div className="projets">
      <div style={{ zIndex:10}}>
        <Header />
      </div>
      
      {//need to do a .map of all the <ProjectCard> and show the card with the right data
      }





      {//for testing design
      }
      <div className="container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      


    </div>
  )
}