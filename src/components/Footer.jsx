
const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div className="share ">
          <a href="#" className="fab fa-facebook-f !text-black"></a>
          <a href="#" className="!text-black fab fa-twitter"></a>
          <a href="#" className=" !text-black fab fa-instagram"></a>
          <a href="#" className="!text-black fab fa-linkedin"></a>
          <a href="#" className="!text-black fab fa-pinterest"></a>
        </div>
        <div class="links">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </div>
        <div class="credit">
          created by <span>Lana</span> | all rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
