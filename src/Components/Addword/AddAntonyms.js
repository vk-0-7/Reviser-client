import axios from 'axios';
import React, { useState ,useEffect,} from 'react'
import './AddAntonyms.css'
import { useHistory } from 'react-router-dom';

const AddAntonyms = ({user}) => {
 const history=useHistory();
const [dictionary,setDictionary] =useState({
    word:"",
    antonym:"",
    email:user.email,
   
    
})


const[antData,setAntData] =useState([])
// const[antData2,setAntData2] =useState([])



const addword=(e)=>{
    const {name,value}=e.target;
    setDictionary({
        ...dictionary,
        [name]:value,
    })
}




//   var email=user.email
 const addAntonym = ()=>{
const{word,antonym,email}=dictionary;
  if(word && antonym && email){
    axios.post("https://reviser-back.herokuapp.com/addantonyms",dictionary)
    .then(() =>{
        setAntData([...antData,{word,antonym,email}])
       
         
    })
    
  }
     else{
      alert("Invalid Input");
     }
}
  const getAntonyms=()=>{
axios.get("https://reviser-back.herokuapp.com/getantonyms")
   .then((response) =>{
     const data=response.data
     setAntData(data)
     console.log(data);

    })
}


  useEffect(() =>{
   getAntonyms();
   
  },[])
 
   
      
  

  return (
    <>
   
   {/* { console.log(user.email)} */}
    <div class=" col justify-content-center d-flex  ">

<div className="input" >
  <input type="text"  placeholder="eg. Fat" name='word' value={dictionary.word} onChange={addword}/>
  {/* <span  >Antonyms</span> */}
  <input type="text"  placeholder="Thin"   name='antonym' value={dictionary.antonym} onChange={addword}/>
</div>

<button type="button"   onClick={addAntonym}>Add</button>
    </div>
<div className="table">
    <table>
    <tr>
        <th>word</th>
        <th>Antonyms</th>
    </tr>

        {
         antData.map((element,index)=>{

            if(element.email===dictionary.email){
           return(
            <>
             <tr>
           <td>{element.word}</td>
           <td>{element.antonym}</td>
            </tr>
            </>
           )}
                                     
})
        } 

           
     </table>

     </div>

    </>
  )
}

export default AddAntonyms