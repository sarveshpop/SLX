import React,{useEffect,useContext} from 'react';

import Header from '../Components/Header/Header';

import Posts from '../Components/Posts/Posts';
import { Firebase } from '../firebase/config';
import { AuthContext } from '../contextStore/AuthContext';

function Home(props) {
 const {setUser}=useContext(AuthContext)
  useEffect(()=>{
    
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      
    })
 
  },[setUser])
  
  return (
    <div className="container-fluid">
      <Header />
      <Posts />
    </div>
  );
}

export default Home;
 
