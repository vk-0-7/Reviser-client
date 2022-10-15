import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QuizSynonyms.css";
import { useHistory } from "react-router-dom";
import Error from "./Error";
import Quiz_Syno from "./Quiz_Syno";


const Quizsynonyms = ({
   user,
   synData,
   setSynData,
   QuestionCount,
   setQuestionCount,
   synscore,
   setSynscore
}) => {

  const history = useHistory();
  const [options_syno, setOptions_syno] = useState([]);
  const [correctOne, setCorrectOne] = useState();
  const [userSynonym,setUserSynonym] =useState([]);
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
 
  const allSynonyms = [];
  const allOptions_syno = [];

  const handleQuit = () => {
    history.push('/resultsyno')
  };

  const handleNext = () => {
    if (QuestionCount + 1 > userSynonym.length) history.push("/resultsyno");
    else if (selected) {
      setQuestionCount(QuestionCount + 1);
      setSelected();
    } else {
      setError("please select an option first");
    }
  };

 
  useEffect(() => {
   
  
    for (let i = 0; i < synData.length; i++) {
      if(synData[i].email===user.email){
      
       allSynonyms.push(synData[i]);
       allOptions_syno.push(synData[i].synonym);}
     
    }
   console.log(allSynonyms)
   setUserSynonym(allSynonyms);
    console.log(userSynonym)
    let temp = [];
    
    temp = getRandomelements(allOptions_syno);
    console.log(temp)
    if (temp.includes(userSynonym[userSynonym.length - QuestionCount]?.synonym)) {
      console.log("true");
    } else {
      console.log("false");
      console.log(temp)
      console.log(allOptions_syno)
      temp[0] = allOptions_syno[allOptions_syno.length -QuestionCount];
      temp = temp.sort(() => Math.random() - 0.5);
    }
   
    setOptions_syno([...temp]);

    setCorrectOne(allOptions_syno[allOptions_syno.length - QuestionCount]);

    // console.log(options_syno);
  }, [QuestionCount]);
  //  console.log(correctOne)
  
 
  function getRandomelements(allOptions_syno) {
    return [...allOptions_syno]
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .slice(0, 4);
  }

  const handleSelect = (i) => {
    if (selected === i && i === correctOne) {
      return "select";
    }
    if (selected === i && i !== correctOne) {
      return "wrong";
    } else if (i === correctOne) {
      return "select";
    }
  };
  const handleCheck = (i) => {
    setSelected(i);
    if (i === correctOne) setSynscore(synscore + 1);
    setError(false);
  };
  
  return (
    <>
    <Quiz_Syno handleCheck={handleCheck} handleNext={handleNext} handleQuit={handleQuit} handleSelect={handleSelect} error={error} setError={setError} userSynonym={userSynonym} setUserSynonym={setUserSynonym} QuestionCount={QuestionCount} options_syno={options_syno} selected={selected} ></Quiz_Syno> 

    </>
  )
}

export default Quizsynonyms