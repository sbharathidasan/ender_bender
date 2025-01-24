import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const Game = () => {
  const [showResult, setShowResult] = useState(false);

  const onClick = () => setShowResult(true);

  return (
    <div>
      <Button onClick={onClick}>START</Button>
      {showResult ? <Result /> : null}
    </div>
  );
};

const Result = () => {
  const [word, setWord] = useState(""); // To store the fetched word

  // Function to fetch a random word from the API
  const fetchWord = async () => {
    try {
      const response = await axios.get("https://random-word-api.vercel.app/api?word");
      if (response.status === 200) {
        setWord(response.data[0]); // The API returns an array with one word
      }
    } catch (error) {
      console.error("Error fetching the word:", error);
    }
  };

  // Fetch the word when the component mounts
  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <div>
      <h3>Random Word:</h3>
      {word ? <p>{word}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Game;
