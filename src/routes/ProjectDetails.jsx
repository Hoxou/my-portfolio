//import "../styles/projectDetails.less";
import { projects as projectsData } from "../data/data.json";

export default function ProjectDetails(props) {
    console.log(props);
  return (
    <div className="projectDetails">
        
       <h1>HELLO,I am project number {props.id}</h1>


    </div>
  )
}