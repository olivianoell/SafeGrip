import "./Hero.scss";
import HeroImg from "../../assets/images/hero.jpg";

function Hero() {

    return ( 
        <section className="hero">
            <img className="hero__img" src={HeroImg} alt="hero"/>
        </section>
    );
}

export default Hero;