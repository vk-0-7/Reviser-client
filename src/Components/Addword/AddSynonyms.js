import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import './AddSynonyms.css'

const AddSynonyms = ({user}) => {

  const [Syno,setSyno]=useState({
    word:"",
    synonym:"",
    email:user.email,
  })


  const[synData,setSynData] =useState([])

const AddSyno=(e) =>{
    const {name,value}=e.target
    setSyno({...Syno,
        [name]:value,  })
}

 const AddSynonym= ()=>{
      const{word,synonym,email}=Syno;
      if(word && synonym && email){
        axios.post("https://reviser-back.herokuapp.com/addsynonyms",Syno)
        .then(() =>{
            setSynData([...synData,{word,synonym,email}])
            
        })
        
      }
         else{
          alert("Invalid Input");
         }
 }

 const getSynonyms=()=>{
  axios.get("https://reviser-back.herokuapp.com/getsynonyms")
     .then((response) =>{
       const data=response.data
       setSynData(data)
       
  
      })
  }
  
  
    useEffect(() =>{
     getSynonyms();
     
    },[])


  return (
    <>
    
     <div class=" col justify-content-center d-flex ">

<div className="input" >
  <input type="text"  name='word' value={Syno.word} onChange={AddSyno} placeholder="eg. Fat" />
  {/* <span  >Synonyms</span> */}
  <input type="text"   name='synonym' value={Syno.synonym} onChange={AddSyno} placeholder="Bulky" />
</div>

<button type="button"  onClick={AddSynonym}>Add</button>
    </div>

    <div className="table">
    <table>
    <tr>
        <th>word</th>
        <th>Synonyms</th>
    </tr>

    {
         synData.map((element,index)=>{

            if(element.email===Syno.email){
           return(
            <>
             <tr>
           <td>{element.word}</td>
           <td>{element.synonym}</td>
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

export default AddSynonyms