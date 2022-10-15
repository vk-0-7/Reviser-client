import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QuizAntonyms.css";
import { useHistory } from "react-router-dom";
import Error from "./Error";
import Quiz from "./Quiz";

const Quizantonyms = ({
  user,
  antData,
  setAntData,
  count,
  setCount,
  score,
  setScore
 
}) => {
   
  const history = useHistory();
  const [options, setOptions] = useState([]);
  const [correct, setCorrect] = useState();
  const [userAntonym,setUserAntonym] =useState([]);
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
 
  const allAntonyms = [];
  const allOptions = [];

  const handleQuit = () => {
    history.push('/result')
  };

  const handleNext = () => {
    if (count + 1 > userAntonym.length) history.push("/result");
    else if (selected) {
      setCount(count + 1);
      setSelected();
    } else {
      setError("please select an option first");
    }
  };

  //  console.log(getRandomelements(allAntonyms));
  useEffect(() => {
   
  
    for (let i = 0; i < antData.length; i++) {
      if(antData[i].email===user.email){
      
       allAntonyms.push(antData[i]);
       allOptions.push(antData[i].antonym);}
     
    }
   console.log(allAntonyms)
   setUserAntonym(allAntonyms);
    console.log(userAntonym)
    let variable = [];
    
    variable = getRandomelements(allOptions);
    console.log(variable)
    if (variable.includes(userAntonym[userAntonym.length - count]?.antonym)) {
      console.log("true");
    } else {
      console.log("false");
      console.log(variable)
      console.log(allOptions)
      variable[0] = allOptions[allOptions.length -count];
      variable = variable.sort(() => Math.random() - 0.5);
    }
   
    setOptions([...variable]);

    setCorrect(allOptions[allOptions.length - count]);

    // console.log(options);
  }, [count]);
  //  console.log(correct)
  
 
  function getRandomelements(allOptions) {
    return [...allOptions]
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .slice(0, 4);
  }

  const handleSelect = (i) => {
    if (selected === i && i === correct) {
      return "select";
    }
    if (selected === i && i !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };
  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  return (
    <>
   { console.log(userAntonym)}
     <Quiz handleCheck={handleCheck} handleNext={handleNext} handleQuit={handleQuit} handleSelect={handleSelect} error={error} setError={setError} userAntonym={userAntonym} setUserAntonym={setUserAntonym} count={count} options={options} selected={selected} ></Quiz>
     
    </>
  );
};

export default Quizantonyms;
