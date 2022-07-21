import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Hero from "../assets/hero.png";
import HeroText from "../assets/heroText.png";
import Button from "./Button";
const Home = () => {
  return (
    <Section>
      <Navbar />
      <div className="design"></div>

      <div className="container">
        <div className="content">
          <h1>
            Explore Our
            <span>
              <img src={HeroText} alt="heroText.png" />
            </span>
            Hero Text Digital NFT Market Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium consequuntur omnins.
          </p>
          <div className="buttons">
            <Button blue={true} text="Explore More" />
            <Button text="Create NFT" />
          </div>
          <div className="data">
            <div className="dataTabs">
              <h2>40K</h2>
              <h5>Art work</h5>
            </div>
            <div className="dataTabs">
              <h2>12K</h2>
              <h5>Auction</h5>
            </div>
            <div className="dataTabs">
              <h2>40K</h2>
              <h5>Art work</h5>
            </div>
          </div>
        </div>
        <div className="hero_img">
          <img src={Hero} alt="hero.png" />
        </div>
      </div>
    </Section>
  );
};

export default Home;

const Section = styled.section`
  margin: 0.5rem;
  background-color: #232835;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 5rem;
  .design {
    /* display: none; */
    height: 30rem;
    width: 30rem;
    background-color: #ae54c27d;
    opacity: 0.5;
    border-radius: 100%;
    filter: blur(2000px);
    position: absolute;
    bottom: -30%;
    left: -10%;
    z-index: 1;
  }

  .container {
    padding: 2rem;
    margin: 0 2rem;
    display: flex;
    .content {
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 5rem;
      padding-right: 2rem;
      h1 {
        font-size: 5rem;
        color: #fff;
      }
      p {
        color: #a6a6a6;
        font-size: 1.2rem;
      }
      .buttons {
        display: flex;
        gap: 2rem;
      }
      .data {
        display: flex;
        gap: 5rem;
        .dataTabs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          h2 {
            font-size: 2rem;
            color: #fff;
          }
          h5 {
            text-align: center;
            color: #a6a6a6;
          }
        }
      }
    }
  }

  .hero_img {
    img {
      height: 40rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    border-radius: 0;
    .design {
      display: none;
    }
    .container {
      flex-direction: column;
      margin: 0;
      padding: 2rem;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      .content {
        padding-right: 0;
        h1 {
          font-size: 3rem;
          span {
            img {
              height: 2rem;
            }
          }
        }
        .buttons {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .data {
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }
      }
      .hero_img {
        img {
          height: 15rem;
        }
      }
    }
  }
`;
