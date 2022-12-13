import React from "react";
import BlogHeader from "../Components/Header-components/blogHeader";
import JoinBlog from "../Components/Footer-components/secondJoinBlog";
const Blog = () => {
  return (
    <>
      <div className="max-w-[100vw] w-[100vw] ">
        <div className="">
          {/* Header */}
          <div className="">
            <BlogHeader />
          </div>
          {/* Body */}
          <div className=" max-w-[100vw] w-[100vw] min-h[100vh] h-[100vh] ">
            <div className=""></div>
          </div>
          {/* footer */}
          <div className=" max-w-[100vw] ">
            <JoinBlog />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
