import { product } from "../utils/Data";
import { BsFillStarFill, BsStarHalf, BsFillEyeFill, BsFillCartFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
const Products = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading !text-black">
          our <span>products</span>
        </h1>

        <div className="box-container">
          {product.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <div className="icons flex justify-center">
                <a href="#" className="fas fa-shopping-cart flex justify-center items-center"><BsFillCartFill className="!text-black"/></a>
                <a href="#" className="flex justify-center items-center fas fa-hearth"><MdFavorite className='!text-black' /></a>
                <a href="#" className="flex justify-center items-center fas fa-eye">< BsFillEyeFill className="!text-black" /></a>
              </div>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <h3 className="!text-black">fresh coffee</h3>
                <div className="stars flex justify-center">
                  <i className="fas fa-star"><BsFillStarFill/></i>
                  <i className="fas fa-star"><BsFillStarFill/></i>
                  <i className="fas fa-star"><BsFillStarFill/></i>
                  <i className="fas fa-star"><BsFillStarFill/></i>
                  <i className="fas fa-star-half-alt"><BsStarHalf/></i>
                </div>
                <div className="price !text-black">
                &#8358;15.99 <span>&#8358;20.99</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
