import React from "react";

const Blog = () => {
  var i, f;
  f = 1;
  var num = 5;
  debugger;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  alert(f);

  return (
    <>
      <div className="">
        <h1>Blog Page</h1>
        <h2>
          {i} Factorial is : {f}
        </h2>
      </div>
    </>
  );
};

export default Blog;
