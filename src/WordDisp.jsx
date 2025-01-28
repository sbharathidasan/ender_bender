import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const WordDisp = () => {
  const [showResult, setShowResult] = useState(false);

  const onClick = () => setShowResult(true);

  return (
    <div>
      {showResult ? (
        <Result />
      ) : (
        <Button style={{ margin: "10px" }} onClick={onClick}>
          START
        </Button>
      )}
    </div>
  );
};

const Result = () => {
  const [randomWord, setRandomWord] = useState(""); // To store the fetched word
  const [inputWord, setInputWord] = useState(""); // To store user's input
  const [usedWord] = useState([]);
  // Function to fetch a random word from the API
  const fetchWord = async () => {
    try {
      const response = await axios.get("https://random-word-api.vercel.app/api?word");
      if (response.status === 200) {
        setRandomWord(response.data[0]);
        usedWord.push({
          name: response.data[0],
        });
      }
    } catch (error) {
      console.error("Error fetching the word:", error);
    }
  };

  // Function to validate the user's input word
  const validateWord = async () => {
    const l = usedWord.filter(item => {if(item.name.toLowerCase().includes(inputWord.toLowerCase())) {return true} else{return false}});
    if (l.length==1){
      alert("word already used!");
      return;
    }console.log(usedWord);
    if (!inputWord) {
      alert("Please enter a word!");
      return;
    }

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`);
      console.log(response.data[0].word.length);
      
      if (response.status === 200) {
        setRandomWord(inputWord);
        usedWord.push({
          name: inputWord,
        });
      }
    } catch (error) {
      console.log(error);
      alert("The word you entered is not valid. Please try again!");
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <div>
      <h3>{inputWord!=="" ?<>  WORD :</> :<>Random Word : </> }</h3>
      {randomWord ? <p>{randomWord}</p> : <p>Loading...</p>}

      <h3>Enter Your Word:</h3>
      <input
        type="text"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
        placeholder="Type a word"
        style={{ marginRight: "10px" }}
      />
      <Button onClick={validateWord}>Validate</Button>

    </div>
  );
};

export default WordDisp;
