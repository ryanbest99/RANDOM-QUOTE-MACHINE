import React, { useEffect, useState } from "react";

const App = () => {
  const [packages, setPackages] = useState({});
  const randomNumber = Math.floor(Math.random() * 102);

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
  };

  return (
    <>
      <h1>Random Quote</h1>
      <h2>{quote}</h2>
      <h3>- {author}</h3>
      <button onClick={nextBtn}>Next Quote</button>
    </>
  );
};

export default App;
