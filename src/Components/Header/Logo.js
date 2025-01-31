import LogoImg from "../../assets/images/logobacola.png";

function Logo() {
  return (
    <div className="logoWrapper d-flex align-items-center col-sm-2">
      <a href="/" className="logo">
        <img src={LogoImg} alt="eCommerce" />
      </a>
    </div>
  );
}
export default Logo;
