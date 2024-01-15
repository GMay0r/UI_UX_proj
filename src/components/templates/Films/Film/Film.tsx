import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { VscPlayCircle } from "react-icons/vsc";
import * as Style from "./index.styled";

const Film: React.FC<MovieList> = (props) => {
  return (
    <Style.Film>
      <Link href={`/films/${props.id}`}>
        <Style.Content>
          <Style.Cards>
            <Style.Card1
              src={
                props.medium_cover_image
                  ? props.medium_cover_image
                  : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
              }
              alt={props.medium_cover_image}
            ></Style.Card1>

            <Style.Card2>
              <Style.Rating>
                {/* <Style.RatingIcon> */}
                {/* </Style.RatingIcon> */}
                <Style.RatingText> {props.rating} / 10</Style.RatingText>
              </Style.Rating>
              {/* <Style.Play src='https://www.iconninja.com/files/39/676/33/media-controls-play-icon.png'></Style.Play>   */}
              <Style.Play>{<VscPlayCircle/>}</Style.Play>  

            </Style.Card2>
          </Style.Cards>
          <Style.Name>{props.title}</Style.Name>

          <Style.Text>
            {props.year} {props.language}
          </Style.Text>
        </Style.Content>
      </Link>
    </Style.Film>
  );
};

export default Film;
