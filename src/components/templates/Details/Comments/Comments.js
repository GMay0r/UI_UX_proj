import {React, useState, useEffect } from 'react';
import * as Style from "./Comments.styled";

function Comments() {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState("");
  
    useEffect(() => {
      const url = window.location.href;
      const storedComments = localStorage.getItem(url);
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    }, []);
 
    const handleDeleteComment = (index) => {
      const updatedComments = [...comments];
      updatedComments.splice(index, 1);
      setComments(updatedComments);
    };
  


    const onClickHandler = () => {
      const newComment = { user, comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      const url = window.location.href;
      localStorage.setItem(url, JSON.stringify(updatedComments));
      setComment("");
    };
  
    const onChangeHandler = (e) => {
      setComment(e.target.value);
    };
  
    const onUserChangeHandler = (e) => {
      setUser(e.target.value);
    };

    const onEnterKeyDown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onClickHandler();
      }
    };

    return (
      <Style.Container>
        <Style.CommentFlexbox>
          <Style.CommentText>Comments</Style.CommentText>
          <Style.InputBoxName value={user} onChange={onUserChangeHandler} placeholder="Your name"></Style.InputBoxName>
          <Style.InputBox value={comment} onKeyDown={onEnterKeyDown} onChange={onChangeHandler} placeholder="Your comment..."></Style.InputBox>
          <Style.CommentButton onClick={onClickHandler}>Submit</Style.CommentButton>
        </Style.CommentFlexbox>
        {comments.map((item, index) => (
          <div key={index} className='comment-container'>
            <p><strong>{item.user}</strong>: {item.comment}</p>
            {/* <Style.DeleteButton> onClick={() => handleDeleteComment(index)}>Delete</Style.DeleteButton> */}
            <Style.DeleteButton onClick={() => handleDeleteComment(index)}>Delete</Style.DeleteButton>

          </div>
        ))}
      

      </Style.Container>
      
    );
  }
  
  export default Comments;
