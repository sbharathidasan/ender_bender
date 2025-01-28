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
  const [point,incPoint]=useState(1);
  const [chances,redChances]=useState(9);
  const [randomWord, setRandomWord] = useState(""); // To store the fetched word
  const [inputWord, setInputWord] = useState(""); // To store user's input
  const [usedWord,setUsedWord] = useState([]);
  const [tempRes,setTemp]=useState("");
  // Function to fetch a random word from the API
  const fetchWord = async () => {
    try {
      const response = await axios.get("https://random-word-api.vercel.app/api?word");
      if (response.status === 200) {
        setRandomWord(response.data[0]);
        setTemp(response.data[0]);
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
    if(chances<=  0){
      console.log("hi");
      alert("Nice try ...!! ,Try again 😊 "+"Score =" +point);
      redChances(9);
      incPoint(0);
      console.log(usedWord);
      usedWord.length=0;
      fetchWord(); 
      console.log(usedWord);
      return;
    }
    if (l.length==1){
      alert("word already used!");
      redChances(chances-1);
      console.log(chances);
      return;
    }
    if (!inputWord) {
      alert("Please enter a word!");
      return;
    }
    if(inputWord[0].toLowerCase()!=tempRes[tempRes.length-1].toLowerCase()){
      alert("please read the rules");
      redChances(chances-1);
      return;
    }
    
      try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`);
      
      if (response.status === 200 && chances!=0 ) {
        setRandomWord(inputWord);
        setTemp(inputWord);
        incPoint(point+1);
        console.log(point);
        usedWord.push({
          name: inputWord,
        });
        setInputWord("");
      }
      
    } catch (error) {
      console.log(error);
      redChances(chances-1);
      setInputWord("");
      alert("The word you entered is not valid. Please try again!");
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <div>
      <h3>WORD</h3>
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
