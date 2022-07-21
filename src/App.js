import React from "react";
import Home from "./components/Home";
import Clients from "./components/clients";
import CreateAndSell from "./components/CreateAndSell";
import Choose from "./components/choose";
import MarketPlace from "./components/MarketPlace";
import Subscribe from "./components/subscribe";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import styled from "styled-components";

const App = () => {
  return (
    <Div>
      <Home />
      <Clients />
      <CreateAndSell />
      <Choose />
      <MarketPlace />
      <Subscribe />
      <ScrollToTop />
      <Footer />
    </Div>
  );
};

const Div = styled.div`
  overflow: hidden;
`;
export default App;
