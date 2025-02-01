import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logobacola.png";

function Logo() {
  return (
    <div className="logoWrapper d-flex align-items-center col-sm-2">
      <Link to="/" className="logo">
        <img src={LogoImg} alt="eCommerce" />
      </Link>
    </div>
  );
}
export default Logo;
