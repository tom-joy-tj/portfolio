import github from "../assets/gh_logo.png"

const Header = () => {
  return (
    <header>
        <img src={github} className="headerLogo" />
      <nav>
        <a href="#about">About</a> |{" "}
        <a href="#projects">Projects</a> |{" "}
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;