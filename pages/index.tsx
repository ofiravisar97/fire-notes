import type { NextPage } from "next";
import Head from "next/head";
import { CSSProperties, useState } from "react";
import Input from "../src/components/UI/Input";

const Home: NextPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const registerStyles: CSSProperties = {
    paddingRight: isLogin ? "2rem" : "50%",
    visibility: isLogin ? "hidden" : "visible",
  };
  return (
    <div className='landing-container'>
      <form className='landing-card'>
        <div className='landing-title-left'>LOGIN</div>
        <div className='landing-title-right' style={registerStyles}>
          SIGNUP
        </div>
        <div className='landing-inputs'>
          <Input
            placeholder='Email: '
            type='email'
            value={"a"}
            onChange={(e) => console.log(e)}
          />
          <Input
            placeholder='Password: '
            type='email'
            value={"a"}
            onChange={(e) => console.log(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Home;
