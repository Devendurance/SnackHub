import { Link } from "react-router-dom";
import { menu } from "../utils/Data";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading !text-black">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box hover:!text-white " key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3 className="hover:!text-white !text-black">tasty and healty</h3>
              <div className="price hover:!text-white !text-black">
              &#8358;15.99 <span>&#8358;20.99</span>
              </div>
              <Link to="/auth" className="btn">
                Place your order
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
