import "../styles/home.less";
import Header from "../components/Header"

export default function Home(props) {
  return (
    <div className="home">
        <Header />
        <div className="container">
          <div className="poste">
              <p>Poste recherché</p>
              <hr></hr>
              <p>UI/UX Designer</p>
          </div>
          <div className="main-title">
            <p >Après avoir designé des interfaces à Taïwan pendant deux ans pour des applications web Big Data, je souhaite poursuivre ma carrière dans ce domaine.</p>
          </div>
          
          <div className="bg-square"></div>
          <div className="quote-container">
            <p className="big-quote">“</p>
            <p className="quote">Ayant une expérience de <strong>chef de projet digital</strong> et de <strong>développeur front-end</strong> l’environnement de création d’une application web est pour moi très familier. J’ai également passé 5 ans à Taïwan, je sais donc m’adapter à tout type d’environnement et je suis capable de faire face aux challenges. </p>
            <p className="big-quote">“</p>
          </div>
        </div>
        
        
    </div>
  )
}