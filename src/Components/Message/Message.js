import React, {forwardRef, useRef,useEffect} from 'react'
import {Card,CardContent,Typography} from '@material-ui/core';
import "./Message.css"

// {username,messages}
const Message = forwardRef(({username,messages},ref) => {

const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  
    const isUser = username === messages.username;
    return (
        <div ref={divRef} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message_guessCard"}>
                <CardContent>
                    <Typography 
                            color="white"
                            variant="h5"
                            component="h2"
                        >
                            {!isUser && `${messages.username || 'Unknown user'}: `} {messages.message}
                            {isUser}
                            <br />
                        
                        </Typography>
                </CardContent>
            </Card> 
          
        </div>
        
    )
})

export default Message
