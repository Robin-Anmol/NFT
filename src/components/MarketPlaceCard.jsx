import React from "react";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
const MarketPlaceCard = ({ item, index }) => {
  return (
    <Div>
      <div className="image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="name">
        <h4>{item.name}</h4>
        <BsThreeDots />
      </div>
      <h5 className="username">@robin_anmol</h5>
      <div className="price_container">
        <h5>5.7ETH </h5>
        <FaEthereum />
      </div>
    </Div>
  );
};

const Div = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0.5rem;
  border-radius: 1rem;
  width: max-content;
  transition: all 0.2 ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .name {
    margin-bottom: 1rem;
  }
  .name {
    display: flex;
    color: #222222;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
  .username {
    color: #555555;
    font-size: 0.8rem;
    padding: 0 1rem;
    margin-bottom: 0.5rem;
  }
  .price_container {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
  }
`;

export default MarketPlaceCard;
