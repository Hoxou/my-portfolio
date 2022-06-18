import "../styles/home.less";
import Header from "../components/Header"

export default function Home(props) {
  return (
    <div className="home">
        <Header />
        <div className="container">
          <p>Après avoir designé des interfaces à Taïwan pendant deux ans pour des applications web Big Data, je souhaite poursuivre ma carrière dans ce domaine.</p>
        </div>
        
    </div>
  )
}