import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  // background-color: #FBF4E1;
  width:100%;

`;
export const CommentContainer = styled.div`
  margin-bottom: 10px;
  width: 98%;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 10px;
  word-break: break-all;

`;
export const CommentFlexbox = styled.div`
display: flex;
flex-direction: column;
align-items:flex-start;

`;
export const CommentText = styled.h3`
margin-bottom: 10px;
margin: 12px 0;
font-size: 1.15rem;
font-weight: 600;

`;
export const InputBox = styled.textarea`
margin-bottom: 10px;
padding: 5px;
height: 150px;
width: 1000px;
resize:none;

`;
export const InputBoxName = styled.input`
margin-bottom: 10px;
padding: 5px;
height: 25px;
width: 265px;
// background-color: #ffffff;

`;
export const CommentButton = styled.button`
  background-color: #008ee0;
  color: #fff;
  cursor: pointer;
  height: 40px;
  width: 80px;
  font-size: 1.05rem;
  margin-top: 10px;
  border-radius: 5px;
  border-style: none;
  margin-left:932px;

`;
export const DeleteButton = styled.button`
background-color: #008ee0;;
color: #fff;
border: none;
padding: 5px 10px;
margin-left: 10px;
cursor: pointer;
border-radius: 5px;

`;





// .comment-button:hover {
//   background-color: #0056b3
// }

