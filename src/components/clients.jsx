import React from "react";
import styled from "styled-components";
import Client1 from "../assets/client1.png";
import Client2 from "../assets/client2.png";
import Client3 from "../assets/client3.png";
import Client4 from "../assets/client4.png";
import Client5 from "../assets/client5.png";
import Client6 from "../assets/client6.png";
const clients = () => {
  const clients = [Client1, Client2, Client3, Client4, Client5, Client6];

  return (
    <Section>
      {clients.map((client, index) => {
        return (
          <div className="client" key={index}>
            <img src={client} alt="client" />
          </div>
        );
      })}{" "}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 2rem 5rem 2rem;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

export default clients;
