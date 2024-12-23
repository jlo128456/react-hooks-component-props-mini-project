import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "./About";
import ArticleList from "../components/ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
        {/* Render Header */}
        <Header name={blogData.name} />

{/* Render About */}
<About image={blogData.image} about={blogData.about} />

{/* Render ArticleList */}
<ArticleList posts={blogData.posts} />

    </div>
  );
}

export default App;
