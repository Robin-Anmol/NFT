import React from "react";
import styled from "styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Subscribe from "../assets/subscribe.png";
const subscribe = () => {
  return (
    <Section>
      <div className="content">
        <h2>Subscribe for Get update every New Offers</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
        <div className="input_container">
          <input type="text" placeholder=" Enter Email.." />
          <BsFillArrowRightCircleFill />
        </div>
      </div>
      <div className="image">
        <img src={Subscribe} alt="subscribe.png" />
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 0 9rem 5rem 9rem;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 3rem;
    h2 {
      color: #000;
      font-size: 4rem;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
    }
    .input_container {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      gap: 1rem;
      border: 1px solid #c4c4c4;
      border-radius: 3rem;
      input {
        border: none;
        &:focus {
          outline: none;
        }

        padding-left: 2rem;
        padding-right: 5rem;
        font-size: 1.3rem;
      }
      svg {
        color: #2d69fd;
        font-size: 3rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column-reverse;
    margin: 0 2rem;
    gap: 2rem;
    margin-bottom: 2rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 80vw;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 2rem;
      }
      p {
        line-height: 1.4rem;
      }
      .input_container {
        padding: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: max-content;
        gap: 1rem;
        border: 1px solid #c4c4c4;
        border-radius: 3rem;
        input {
          border: none;
          &:focus {
            outline: none;
          }

          padding-left: 1rem;
          padding-right: 3rem;
          font-size: 0.8rem;
        }
        svg {
          color: #2d69fd;
          font-size: 2rem;
        }
      }
    }
  }
`;
export default subscribe;
