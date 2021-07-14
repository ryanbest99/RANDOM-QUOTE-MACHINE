import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuoteBox from "./components/QuoteBox";
import { colors } from "./colors";

const App = () => {
  const randomNumber = Math.floor(Math.random() * 102);
  const randomNumber2 = Math.floor(Math.random() * colors.length);
  const [packages, setPackages] = useState({});
  const [randomColor, setRandomColor] = useState(colors[randomNumber2]);

  const url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  const fetchQuotes = async () => {
    const res = await fetch(url);
    const { quotes } = await res.json();
    setPackages(quotes[randomNumber]);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const { quote, author } = packages;

  const nextBtn = (e) => {
    e.preventDefault();
    fetchQuotes();
    setRandomColor(colors[randomNumber2]);
  };

  return (
    <Container style={{ backgroundColor: randomColor }}>
      <Box>
        <QuoteBox
          quote={quote}
          author={author}
          nextBtn={nextBtn}
          randomColor={randomColor}
        />
      </Box>
    </Container>
  );
};

const Container = styled.section`
  /* border: 5px solid red; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.article`
  /* border: 3px dashed blue; */
  width: 600px;
  background: #fff;
`;

export default App;
