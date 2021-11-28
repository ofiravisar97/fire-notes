import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return <div className="landing-container">
    <div className="landing-card">
      <h2 className="landing-start__text">A NEW WAY TO MAKE YOUR NOTES</h2>
      <div className="landing-start__btn">
      <button className="landing-start__btn__content">Get Started</button>
      </div>
    </div>
  </div>;
};

export default Home;
