import "./Footer.scss";
import FooterImg from "../../assets/images/footer.jpg";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__img" src={FooterImg} alt="footer"/>
    </footer>
  );
}

export default Footer;