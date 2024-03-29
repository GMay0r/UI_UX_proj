import styled from 'styled-components';

// export const Header = styled.header`
//     display: flex; 
//     width: 100%;
//     min-height: 100px;
//     align-items: center;
//     justify-content: center;
//     color: ${props => props.theme.textColor};
//     box-shadow: 0px 0px 5px ${props => props.theme.accentColor1};
//     background-color: ${props => props.theme.backgroundColor};
//     top: 0;
//     position: sticky;
//     overflow: hidden;
//     z-index: 50;
//     @media (max-width: 768px) and (min-width: 576px)  { 
//         min-height: 60px;
//     }
//     @media (max-width: 576px)  {
//         min-height: 60px;
//     }
// `;
export const Header = styled.header`
    background: black;
    display: flex;
    // margin-bottom: 160px;
    // position: relative;
    // box-shadow: var(--bsh);
    width: 100%;
    align-items: center;
    min-height: 100px;
    top: 0;
    position: sticky;
    z-index: 50;
    // @media (max-width: 768px) and (min-width: 576px)  { 
    //     min-height: 60px;
    // }
    // @media (max-width: 576px)  {
    //     min-height: 60px;
    // }
    
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    // background-color: ${props => props.theme.backgroundColor};
    box-sizing: border-box;

    // @media (min-width: 1200px){
    //     width: 1200px;
    // }
    // @media (max-width: 1200px) and (min-width: 992px)  {
    //     width: 100%;
    // }
    // @media (max-width: 992px) and (min-width: 768px)  {
    //     width: 100%;
    // }
    // @media (max-width: 768px) and (min-width: 576px)  {     
    //     width: 100%;
    // }
    // @media (max-width: 576px)  {   
    //     width: 100%;
    // }
`;

// export const Logo = styled.div`
//     // display: flex;
//     width: 100%;
//     flex: 1 1 auto; 
//     flex-direction: column;
//     align-items: flex-start;
//     margin: 10px 0px;
// `;
export const Logo = styled.div`

    display: flex;
    flex-direction: column;
    // justify-content: center;
    // height: 80px;
    // text-align: left;
    padding-left: 48px;
`;

export const Img = styled.img`
    // display: inline-block;
    height: 60px;
`;
// export const Name = styled.span`
//     display: inline-block;
//     align-items: center;
//     font-size: ${props => props.theme.textSizeTextM};
//     font-weight: 500;
//     // font-family: Roboto;
//     font-family: "Circe", sans-serif;
//     letter-spacing: 1px;
//     margin: 5px 0px 0px 0px;
//     @media (max-width: 768px) and (min-width: 576px)  {
//         font-size: ${props => props.theme.textSizeTextM500};
//     }
//     @media (max-width: 576px)  {
//         font-size: ${props => props.theme.textSizeTextM500};
//     }
// `;
export const Name = styled.span`
    // display: inline-block;
    text-transform: uppercase;
    color: #fff;
    font-size: 18px;
    letter-spacing: 5px;
    font-weight: 400;
    line-height: 1;
    font-family: 'Fredoka One', sans-serif;
    @media (max-width: 768px) and (min-width: 576px)  {
                font-size: ${props => props.theme.textSizeTextM500};
            }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
        }
`;

export const Buttons = styled.div`
   display:flex;
   align-items: center; 
    // margin-left: 300px;
    // float:right;
    width:100%;

   


`;

