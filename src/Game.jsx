// dict api= https://api.dictionaryapi.dev/api/v2/entries/en/<word>
// word api =https://random-word-api.vercel.app/api?word
import React, { useState ,useEffect} from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const Game=()=>{
    const [showResult,setshowResult]=useState(false);
    const onClick=()=>setshowResult(true)
    return(
        <div >
            <Button onClick={onClick}>START</Button>
            {showResult?<Result/>:null}
        </div>
    )
}
const Result=()=>{
    const Word=async()=>{
    var a;
    try {
      const response = await axios.get("https://random-word-api.vercel.app/api?word");
      console.log(response.data);
      a=response;
      if (response.data.status===200) {
        alert(response.data);
      }
    } catch (error) {
        console.log(error);
    }
    return(
        <><p>45466lfsljlkf</p></>
    )
  };
  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  Word()
    return () => { ignore = true; }
    },[]);
    
    return(
    <>
    <></>
    </>
)}
export default Game;