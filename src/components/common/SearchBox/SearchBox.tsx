import React from "react";
import * as Style from "./SearchBox.styled";
import ButtonSearch from "./ButtonSearch";

const SearchBox = () =>{
    return(
    <Style.Cover>
        {/* <input className="story" name="story" placeholder="Найти фильм" type="text" >
        </input> */}
        <Style.SearchBox placeholder="Search movie...">

        </Style.SearchBox>
        <ButtonSearch></ButtonSearch>
    </Style.Cover>)
    
    
}
export default SearchBox;