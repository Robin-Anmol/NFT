import React from "react";
import styled from "styled-components";
import Sell1 from "../assets/sell1.png";
import Sell2 from "../assets/sell2.png";
import Sell3 from "../assets/sell3.png";
import Button from "./Button";
const CreateAndSell = () => {
  const data = [
    {
      image: Sell1,
      title: "Create your collection",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Create",
    },
    {
      image: Sell2,
      title: "Add your NFTs",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Add NFT",
    },
    {
      image: Sell3,
      title: "List them for sale",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Sell Now",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Create and Sell your NFTs</h2>
      </div>
      <div className="container">
        <div className="content">
          {data.map((item, index) => {
            return (
              <div className="createandsell" key={index}>
                <div className="image">
                  <img src={item.image} alt="create and sell" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Button text={item.buttonText} blue={index === 1} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin: 0 6rem 5rem 6rem;
  .title {
    text-align: center;
    h2 {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
  }
  .container {
    background: #232835;
    padding: 5rem;
    border-radius: 1rem;

    .content {
      display: flex;
      gap: 3rem;
      .createandsell {
        background-color: #50545e;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 1rem;
        .image {
          background-color: #2d69fd;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          width: max-content;
          border-radius: 2rem;
          img {
            height: 2rem;
          }
        }
        h3 {
          color: #fff;
        }
        p {
          color: #c8c4cf;
          margin-bottom: 1rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .title {
      h2 {
        font-size: 2rem;
      }
    }
    .container {
      padding: 1rem;
      .content {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;

export default CreateAndSell;
