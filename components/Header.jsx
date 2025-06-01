import github from "../assets/gh_logo.png"
import linkedIn from "../assets/li_logo.png"
import email from "../assets/email_logo.png"
import download from "../assets/download.png"

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logoContainer">  
            <a href="https://github.com/tom-joy-tj" target="blank" rel="noopener no referrer">
                <img src={github} className="headerLogo" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/tjoy/" target="blank" rel="noopener no referrer">
                <img src={linkedIn} className="headerLogo" alt="LinkedIn" />
            </a>
            <a href="mailto:thomaspjoy1@gmail.com">
                <img src={email} className="headerLogo" alt ="Email" />
            </a>
            <a href="./Thomas Joy - Jnr FullStack Developer.pdf" download className="download-link">
                <img src={download} className="headerLogo"/>
            </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;