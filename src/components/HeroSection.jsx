/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
      <section className="home" id="home">
        <div className="content">
          <h3>
            SWEET <span>TREAT </span>DELIGHT
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.
          </p>
          <Link to='/auth' className="btn">
            get yours now
          </Link>
        </div>
      </section>
  )
}

export default HeroSection