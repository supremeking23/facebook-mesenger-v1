import React,{useState,useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import Message from "./Components/Message/Message"

import { Button,FormControl,Input,InputLabel,IconButton  } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import db from "./Database/firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
// import useSound from "use-sound";
// import boopSfx from './sound1.mp3';
// import sound from "./sound.mp3"


function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  // useState is simply a variable in react
  //  useEffect = run code on a condition

  //fetch data in firebase
  useEffect(() => {
    db.collection("messages")
    .orderBy('timestamp','asc')
    .onSnapshot(snapshot =>{
        setMessages(snapshot.docs.map(doc => 
          ({id: doc.id , message: doc.data()})
          ))
    });
  }, [])


  useEffect(() =>{
        //run code
        //if black inside [] (the dependencies), this code run ONCE
        // when the app component loads
        console.log("fire useeffect")
        // sound.play();
        setUsername(prompt("Enter username: "))
      },[] // the condition
    )

  const setInputHandler = (e) =>{
    setInput(e.target.value)
  }

  // const sendMessage = (e) => {
  //     // const message = e.target.value;
      
  // }


  const hasInput = () => {
    return input ? true : false //returns true if may laman otherwise wla
  }

  // var audio = new Audio("/sound1.wav")
   

  // const [playOn] = useSound(
  //   '/sound1.mp3',
  //   { volume: 0.90 }
  // );

 const submitHandler = (e) => {
    e.preventDefault();
    
    db.collection('messages').add({
      message:input,
      username : username,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    // playOn();
    // const messageDetail = {username : username, text : input}
    // setMessages([...messages,messageDetail])
    // audio.play();
    setInput("");
 }



   

  return (
    <div className="App">
      <img src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.8562-6/37789948_1959933824027454_666414594595487744_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=-0zelYTEZukAX9mcKjS&_nc_ht=scontent.fmnl17-2.fna&oh=4b6a897d1c7839fe158dc5fa78752742&oe=5F390B33" />
      <h1>React Facebook Messenger</h1>
      <h2>Welcome {username}</h2>
     
     
      <form className="app__form" onSubmit={submitHandler}>
        <FormControl className="app__formControl" >

         
          <Input  
          className="app__input"
          value={input} 
          placeholder = "Enter message"
          onChange={setInputHandler} id="message-text" aria-describedby="message-text" />

          <IconButton 
            className="app__iconButton"
            disabled={!hasInput() } 
            variant="contained" 
            color="primary" 
            type="submit" 
          >
            <SendIcon />

          </IconButton>
          
{/*           
          <Button 
        
          // onClick={sendMessage}
          ></Button> */}
        </FormControl>
      </form>
      
      {/* {messegesList} */}
      {/* <Messages currentUsername={username} username={messages.username} messages={messages} /> */}

      <FlipMove className="app__marginFromMessage">
        {
          messages.map(({id,message}) => (
            <Message key={id} username={username} messages ={message}/>
          )) 
        
        }
      </FlipMove>

    </div>
  );
}

export default App;
