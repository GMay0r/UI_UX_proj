import Button from "@/components/common/Button/Button";
import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import * as Style from "./index.styled";
import SearchBox from "@/components/common/SearchBox/SearchBox";


type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          {/* <Style.Img src="https://yts.mx/assets/images/website/logo-YTS.svg"></Style.Img> */}
          <Style.Img src="https://www.freepngimg.com/thumb/miscellaneous/91600-brand-multiplex-film-cinema-download-hd-png.png"></Style.Img>
          {/* <Style.Img src=""></Style.Img> */}
          {/* <Style.Name>HD movies at the smallest file size.</Style.Name> */}
          <Style.Name>Cinema</Style.Name>
        </Style.Logo>
        <Style.Buttons>
          <SearchBox></SearchBox>
          <Button
            name={<VscSymbolColor />}
            action={() => props.switchTheme()}
            />
            </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
