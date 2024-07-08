import { openUrl } from '../utils/helper';

const Footer = () => {
    return (
        <footer onClick={() => openUrl('https://www.instagram.com/diversidadenelcine/')}>
            <div>   <img src={'arcoiris.png'} alt="Arcoiris" />   Diversidad en el cine      <img src={'arcoiris.png'} alt="Arcoiris" /></div>
        </footer>
    )
}

export default Footer;