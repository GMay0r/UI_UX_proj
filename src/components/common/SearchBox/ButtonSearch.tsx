import React from "react";
import * as Style from "./ButtonSearch.styled";
import { VscSearch } from "react-icons/vsc";

const ButtonSearch = () =>{
    return(<Style.Button><div>{<VscSearch/>}
        </div></Style.Button>

        // <div>

            // {/* <button type="submit">
                // Поиск
            // </button> */}
            // </div>
            


    );
   
    
}
export default ButtonSearch;