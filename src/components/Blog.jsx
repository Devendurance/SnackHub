import { blog } from "../utils/Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" className="title !text-black">
                  tasty and refreshing spices
                </a>
                <span>by admin / 21st may, 2021</span>
                <p className="!text-[#413e3e]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dicta.
                </p>
                <a href="#" class="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
