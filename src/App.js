import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";

import Register from "./Components/Register";
import Quizantonyms from "./Components/quiz/Quizantonyms";
import Quizsynonyms from "./Components/quiz/Quizsynonyms";
import Addantonyms from "./Components/Addword/AddAntonyms";
import Addsynonyms from "./Components/Addword/AddSynonyms";
import Result from "./Components/quiz/Result";
import Resultsyno from "./Components/quiz/Resultsyno";





const App = () => {
  const [user, setLoginUser] = useState({});
  const [count, setCount] = useState(1);
  const [QuestionCount, setQuestionCount] = useState(1)
  const [antData, setAntData] = useState([]);
  const [synData, setSynData] = useState([]);
  const [synscore, setSynscore] = useState(0);
  const [score, setScore] = useState(0);
  
  

  const getAntonyms = () => {
    axios.get("http://localhost:9000/getantonyms").then((response) => {
      setAntData(response.data);
    });
  };

  useEffect(() => {
    getAntonyms();
  }, []);


  const getSynonyms=()=>{
    axios.get("http://localhost:9000/getsynonyms")
       .then((response) =>{
         const data=response.data
         setSynData(data)
        //  console.log(data);
        })
    }
  
      useEffect(() =>{
       getSynonyms();
       
      },[])
  return (
    <>
      
      <Navbar user={user} setLoginUser={setLoginUser} />

      <Switch>
       
        <Route exact path="/">
          {" "}
          <Home />
        </Route>

        <Route exact path="/login">
          {" "}
          <Login setLoginUser={setLoginUser} />
        </Route>
        <Route exact path="/register">
          {" "}
          <Register />
        </Route>

        <Route exact path="/quizsynonyms">
          {" "}
          {user && user._id ? (
            <Quizsynonyms 
            user={user}
            synData={synData}
            setSynData={setSynData}
            QuestionCount={QuestionCount}
            setQuestionCount={setQuestionCount}
            synscore={synscore}
            setSynscore={setSynscore} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}{" "}
        </Route>

        <Route exact path="/quizantonyms">
          {" "}
          {user && user._id ? (
            <Quizantonyms
              user={user}
              antData={antData}
              setAntData={setAntData}
              count={count}
              setCount={setCount}
              score={score}
              setScore={setScore}
             
            />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}{" "}
        </Route>

        <Route exact path="/result">
          {" "}
          {user && user._id ? (
            <Result score={score}  count={count} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}{" "}
        </Route>


        <Route exact path="/resultsyno">
          {" "}
          {user && user._id ? (
            <Resultsyno synscore={synscore}  QuestionCount={QuestionCount} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}{" "}
        </Route>

        <Route exact path="/addantonyms">
          {" "}
          {user && user._id ? (
            <Addantonyms user={user} setLoginUser={setLoginUser} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}{" "}
        </Route>


        <Route exact path="/addsynonyms">
          {" "}
          {user && user._id ? (
            <Addsynonyms user={user} setLoginUser={setLoginUser} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}{" "}
        </Route>
      </Switch>
    </>
  );
};

export default App;
