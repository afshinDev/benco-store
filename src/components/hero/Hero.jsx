import "./Hero.css";

const Hero = () => {
  const style = {
    background:
      "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)),url(./banner.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <section className="hero">
      <div className="container">
        <div style={style} className="hero__banner">
          <div className="hero__content h-full center">
            <p className="hero__content-text">
              simplify <br />
              everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
