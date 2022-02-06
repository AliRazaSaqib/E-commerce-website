/** @format */
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import brand1 from "../../../assets/b-1.jpg";
import brand2 from "../../../assets/b-2.jpg";
import brand3 from "../../../assets/b-3.jpg";
import brand4 from "../../../assets/b-4.jpg";
import "../../../App.css";

const Brand = () => {
  const brandList = [
    {
      image: brand1,
    },
    {
      image: brand2,
    },
    {
      image: brand3,
    },
    {
      image: brand4,
    },
    {
      image: brand4,
    },
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
  };

  const brandItems = brandList.map((elem) => (
    <div key={elem.id} className="mx-auto text-center mt-8 group ">
      <img
        src={elem.image}
        alt="not found"
        className="cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-90 mx-auto"
      />
    </div>
  ));

  return (
    <div>
      <AliceCarousel
        mouseTracking
        autoPlay
        infinite
        animationType="fadeout"
        animationDuration={2000}
        disableButtonsControls
        disableDotsControls
        items={brandItems}
        responsive={responsive}
        controlsStrategy="alternate"
        autoHeight
      />
    </div>
  );
};

export default Brand;
