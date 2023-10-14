
import { review } from "../utils/Data";
import qouteImg from "../assets/quote-img.png";
import { BsFillStarFill, BsStarHalf  } from "react-icons/bs";


const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading !text-black">
          customer&apos;s <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={qouteImg} alt="" className="quote" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                minus vel? Nemo.
              </p>
              <img src={item.img} className="user !flex !justify-center" alt="" />
              <h3>john deo</h3>
              <div className="stars flex justify-center">
                <i className="fas fa-star"><BsFillStarFill/></i>
                <i className="fas fa-star"><BsFillStarFill/></i>
                <i className="fas fa-star"><BsFillStarFill/></i>
                <i className="fas fa-star"><BsFillStarFill/></i>
                <i className="fas fa-star-half-alt"><BsStarHalf /></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
