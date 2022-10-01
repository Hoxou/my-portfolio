import "../styles/cv.less"
import Header from "../components/Header"





export default function Cv(props) {
  return (
    <div className="cv">
      <Header />
      <div className="container">
          <div className="info-avatar">
            <div className="avatar"></div>
            <div className="infos-container">
              <h1>Bonjour !👋🏼</h1>
              <h3>Moi, c'est <b>Victor Toupar.</b></h3>
              <p>Je suis un Designeur UI/UX autodidacte depuis 2 ans. J’habite actuellement à Taïwan.<br />
J’aime voyager 🛫, ️le jeux vidéo ‍🎮, la moto 🏍, et la compétition 🥇. </p>
            </div>
          </div>
          <p>Tu souhaites en apprendre d’avantage sur mes compétences ? <strong>Télécharges mon CV !</strong></p>
          <div className="resume-container">
            {/*}
            <div className="resume">
              <button className="download-btn">
                <a href="../src/file/UIUX_en_resume.pdf" download="CV_UI-UX_Victor_Toupar.pdf">
                Télécharger en Français 🇫🇷
                </a>
              </button>
            </div>
            */}
            <div className="resume">
              <button className="download-btn">
                <a href="../src/file/UIUX_en_resume.pdf" download="CV_UI-UX_Victor_Toupar.pdf">
                Télécharger en Anglais 🇬🇧
                </a>
              </button>
            </div>
            {/*}
            <div className="resume">
              <button className="download-btn">
                <a href="../src/file/UIUX_en_resume.pdf" download="CV_UI-UX_Victor_Toupar.pdf">
                  Télécharger en Chinois 🇹🇼
                </a>
              </button>
            </div>
            */}
          </div>

      </div>
    </div>
  )
}