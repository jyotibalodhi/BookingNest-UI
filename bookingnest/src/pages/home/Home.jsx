import React from "react";
import EmailList from "../../components/emailList/EmailList";
import Featured from "../../components/featured/Featured";
import FeaturedProperty from "../../components/featuredProperty/FeaturedProperty";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Featured Properties</h1>
        <FeaturedProperty/>
        <EmailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
