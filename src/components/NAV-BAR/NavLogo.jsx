import logo from "../../assets/logo.png";

export default function NavLogo() {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="TechStore Logo" className="logo-img" />
      <span className="logo-text">TechStore</span>
    </a>
  );
}
