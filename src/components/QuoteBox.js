import React from "react";
import styled from "styled-components";
import { FaTwitterSquare, FaTumblrSquare } from "react-icons/fa";

const QuoteBox = ({ quote, author, nextBtn, randomColor }) => {
  return (
    <Container>
      <p className="quote" style={{ color: randomColor }}>
        {quote}
      </p>
      <p className="author" style={{ color: randomColor }}>
        - {author}
      </p>
      <BtnBox>
        <SocialIcons>
          <FaTwitterSquare style={{ color: randomColor, fontSize: "3rem" }} />
          <FaTumblrSquare style={{ color: randomColor, fontSize: "3rem" }} />
        </SocialIcons>
        <NextQuote>
          <NextBtn
            onClick={nextBtn}
            style={{ backgroundColor: randomColor, color: "#fff" }}
          >
            Next Quote
          </NextBtn>
        </NextQuote>
      </BtnBox>
    </Container>
  );
};

const Container = styled.div`
  /* border: 3px solid red; */
  margin: 2rem;
  font-weight: 400;

  .quote {
    /* border: 3px solid grey; */
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  .author {
    /* border: 1px solid blue; */
    text-align: right;
    width: 95%;
    margin: 0 auto;
    font-size: 1rem;
  }
`;

const BtnBox = styled.div`
  /* border: 3px solid red; */
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const SocialIcons = styled.div`
  /* border: 1px solid blue; */
  padding: 0;
  margin-top: 2px;
`;

const NextQuote = styled.div`
  /* border: 1px solid blue; */
`;

const NextBtn = styled.button`
  /* border: 1px dashed red; */
  border: none;
  border-radius: 5px;
  padding: 0.8rem;
  font-size: 1rem;
  cursor: pointer;
`;

export default QuoteBox;
