import "./index.less"
import Home from "./routes/Home";
import Projets from "./routes/Projets";
import Cv from "./routes/Cv";
import Router from 'preact-router';

export function App(props) {
  return (
    <Router>
      <Home path="/"/>
      <Projets path="/projets"/>
      <Cv path="/cv" />
    </Router>
  )
}
