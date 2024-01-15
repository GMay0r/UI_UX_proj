import styled from 'styled-components'

export const SortBy = styled.div`
    display: flex;
    align-items: center;
    // justify-content: space-between;
    width: 1160px;
    // flex-wrap: wrap;
    // button:first-child {
    //     border-right: 1px black solid;
    //     padding-right: 10px;
    // }
    // @media (max-width: 768px) {
    //     flex-direction: column;
    //     align-items: start;
    //     button:first-child {
    //         border-right: none;
    //     }
    // // }




    
`

export const Item = styled.div`
    margin-top: 10px;
    margin-left:20px;
    margin-bottom: 10px;
    color: ${(props) => props.theme.header};
    font-size: 15px;
    height:30px;
    width:150px;
    display: flex;
    justify-content: center;
    align-items: center;

    // background-color:#008ee0;
    // border-radius:20px
    cursor:pointer;
`