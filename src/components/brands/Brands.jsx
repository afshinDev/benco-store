import "./Brands.css";

const Brands = () => {
  const brandsObject = [
    "./casio.png",
    "./pera.png",
    "./vila.png",
    "./polo.jpg",
    "./joules.jfif",
    "./dior.png",
  ];

  return (
    <section className="brands-section mt-3">
      <div className="container">
        <div className="brands__title center">
          <span className="brands__title-text heading">Brands</span>
        </div>

        <div className="row center">
          {brandsObject.map((brandSrc, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <div className="brand">
                <img src={brandSrc} alt="" className="brand__img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Brands;
