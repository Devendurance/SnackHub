import { blog , blogPosts} from "../utils/Data";
import { Link } from "react-router-dom";
const Blog = () => {
  console.log(blogPosts)
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blogPosts.map((item) => (
            <div class="box" key={item.id}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" className="title !text-black">
                  {item.title}
                </a>
                <span>{item.date}</span>
                <p className="!text-[#413e3e]">
                  {item.post.slice(0,50)}
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
