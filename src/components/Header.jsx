import "../styles/header.less";
import { Link } from 'preact-router/match';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><Link href="/" activeClassName="active">à propos</Link></li>
            </ul>
            <ul className="middle">
                <li>Victor Toupar</li>
                <li>Designeur UI/UX Junior</li>
            </ul>
            <ul className="right">
                <li><Link href="/projets" activeClassName="active">mes projets</Link></li>
                <li><Link href="/cv" activeClassName="active">mon CV</Link></li>
            </ul>
        </div>
    )
}

export default Header;