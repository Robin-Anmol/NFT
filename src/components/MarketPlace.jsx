import React from "react";
import styled from "styled-components";
import MarketPlace1 from "../assets/marketplace1.png";
import MarketPlace2 from "../assets/marketplace2.png";
import MarketPlace3 from "../assets/marketplace3.png";
import MarketPlace4 from "../assets/marketplace4.png";
import MarketPlace5 from "../assets/marketplace5.png";
import MarketPlace6 from "../assets/marketplace6.png";
import MarketPlace7 from "../assets/marketplace7.png";
import MarketPlace8 from "../assets/marketplace8.png";
import Button from "./Button";
import MarketPlaceCard from "./MarketPlaceCard";
const MarketPlace = () => {
  const marketPlaceData = [
    {
      image: MarketPlace1,
      name: "Aiboi-meta",
    },
    {
      image: MarketPlace2,
      name: "Pedram-mohamm...",
    },
    {
      image: MarketPlace3,
      name: "Eduardo-pena",
    },
    {
      image: MarketPlace4,
      name: "Daeho-cha",
    },
    {
      image: MarketPlace5,
      name: "Justine-florentino",
    },
    {
      image: MarketPlace6,
      name: "Hoang-l-p-solan",
    },
    {
      image: MarketPlace7,
      name: "Joshua-jay",
    },
    {
      image: MarketPlace8,
      name: "Joshua-jay",
    },
  ];
  const marketPlaceType = [
    "All",
    "Art",
    "Generic",
    "Common",
    "Trading",
    "Rare",
  ];
  return (
    <Section>
      <div className="title">
        <h2>NFT Marketplace</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>
      <div className="marketPlaceType">
        {marketPlaceType.map((item, index) => {
          return <Button text={item} key={index} blue={item === "All"} />;
        })}
      </div>
      <div className="marketPlaces">
        {marketPlaceData.map((item, index) => {
          return <MarketPlaceCard item={item} key={index} />;
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0 6rem 5rem 6rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    justify-content: center;
    h2 {
      font-size: 3rem;
    }
    p {
      color: #7b7e86;
    }
  }
  .marketPlaceType {
    display: flex;
    justify-content: center;
    gap: 2rem;
    button:not(.blue) {
      color: #000;
      border-color: #7b7e86;
    }
  }
  .marketPlaces {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .marketPlaceType {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    .marketPlaces {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default MarketPlace;
