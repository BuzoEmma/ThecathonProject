import React from "react";
import Body from "./Body";
import Content from "./Content";
import Nav from "./Nav";
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Nav />
      <Content />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
