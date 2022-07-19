import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import Articlelist from "./ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}></Header>
      <About img={blogData.image} about={blogData.about}></About>
      <Articlelist posts={blogData.posts}></Articlelist>
    </div>
  );
}

export default App