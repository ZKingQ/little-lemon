import './Footer.css';
import logo from '../assets/Logo.svg';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <div>
        <li>
          <ul>
            <a href="https://map.google.com">Address: Chicago</a>
          </ul>
          <ul>
            <a href="tel:555-555-5555">Phone: 555-555-5555</a>
          </ul>
          <ul>
            <a href='mailto:'>Email: example@email.com</a>
          </ul>
        </li>
      </div>
    </footer>
  )
}

export default Footer;