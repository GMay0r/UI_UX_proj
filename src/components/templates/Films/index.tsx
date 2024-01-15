import { useFilmList } from "@/lib/hooks/useFilmList";
import { useEffect, useState } from "react";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import * as Style from "./index.styled";


interface FilmProps {
  genre: string
  variant: string
}

const Films = ({ variant, genre }: FilmProps) => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  // const { filmList, isLoading } = useFilmList(String(page), String(pageSize));

  const { filmList, isLoading } = useFilmList(
    String(page),
    String(10),
    genre,
    variant
)
useEffect(() => {
  setPage(Number(localStorage.getItem(`page`)) || 1)
}, [])

  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  if (isLoading) {
    return;
  }
  return filmList ? (
    <Style.Films>
      <Style.Content>
        {/* <Style.Title>Фильмы</Style.Title> */}
        {/* <Style.Title>Films</Style.Title> */}
        {/* <Style.Bar> */}
          {/* <span className="latest">Latest </span>
          <span className="high_rating">High rating </span>
          <span className="sort_by_date">Sort by date</span> */}
        {/* </Style.Bar> */}
        <Style.List>{filmsList}</Style.List>
        <Pagination
          totalUsersCount={filmList?.data?.movie_count}
          currentPage={page}
          pageSize={pageSize}
          onPageChange={(page) => setPage(page)}
        />
      </Style.Content>
    </Style.Films>
  ) : null;
};

export default Films;
