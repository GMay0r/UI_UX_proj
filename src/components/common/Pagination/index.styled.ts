import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex; 
    width: 100%;
    min-height: 40px;
    flex: 0 0 auto;
    justify-content: center;
    // background-color: ${props => props.theme.bachgroundColor};
    // background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    margin: 20px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  // width: 100px;
  height: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
 
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  // background-color: ${props => props.theme.iconColor};
  font-weight: 500; 
  font-size: ${props => props.theme.textSizeTextM};
  height: 100%;
  border-radius: 1000px;
  padding: 0px 10px;
  // box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
  box-sizing: border-box;
  transition: 0.1s;
  width:40px;
  &:hover{
    transition: 0.1s;
    color: white;
    // background-color:${props => props.theme.accentColor1};
    background-color:#008ee0;
   
  }
  margin: 0px 10px 0px 0px;
  &:last-child{
    margin: 0px 0px 0px 0px;
  }
`;

export const ActiveItem = styled(Item)`
  color: white;
  // background-color:${props => props.theme.accentColor1};
  background-color:#008ee0;
`;