import github from "../assets/gh_logo.png"
import linkedIn from "../assets/li_logo.png"
import email from "../assets/email_logo.png"

const Header = () => {
  return (
    <header>
      <nav>
       <img src={github} className="headerLogo" />
       <img src={linkedIn} className="headerLogo" />
       <img src={email} className="headerLogo" />
      </nav>
    </header>
  );
};

export default Header;