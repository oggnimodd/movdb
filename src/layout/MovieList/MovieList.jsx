import React from 'react';
import { ListWrapper } from './MovieList.style';
import { Row, Container } from '../../shared/Flexi';
import MovieCard from '../../shared/MovieCard/MovieCard';
import 'twin.macro';

const MovieList = ({ movies }) => {
  return (
    <Container>
      <ListWrapper>
        <Row tw="gap-y-8">
          {/* if there is no movie found return an message component here  */}
          {movies && movies.length === 0 && <p>No result</p> }
          {
            movies && movies.map((item) => {
              return (
                <MovieCard
                  key={item.id}
                  movieDetails={item}
                />
              );
            })
          }
        </Row>
      </ListWrapper>
    </Container>
  );
};

export default MovieList;
