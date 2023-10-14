/* eslint-disable react/prop-types */
import About from "../components/About"
import HeroSection from "../components/HeroSection"
import Menu from "../components/Menu"
import Products from "../components/Products"
import Review from "../components/Review"
import Contact from "../components/Contact"
import Blog from "../components/Blog"
// import { useRef } from "react"

const Landing = () => {
//   const RevealOnScroll = ({ children }) => {
//     // const [isVisible, setIsVisible] = useState(false);
//     const ref = useRef(null);


//     let sections = document.querySelectorAll("section")



//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             entry.target.classList.toggle("show", entry.isIntersecting)
//         })
//     }, {
//         threshold: 0.15,

//     })

//     sections.forEach(section => {
//         observer.observe(section)
//     })

//     return (
//         <div ref={ref}>
//             {children}
//         </div>
//     );
// };
  return (
    <>
      
      <HeroSection />
      <About   />
      <Menu  />
      <Products  />
      <Review />
      <Contact  />
      <Blog />

    </>
  )
}

export default Landing