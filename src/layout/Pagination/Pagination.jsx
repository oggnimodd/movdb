import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Container } from '../../shared/Flexi';
import { PaginationWrapper, Button } from './Pagination.style';

const Pagination = ({ total }) => {
  const history = useHistory();
  const { search } = useLocation();
  const parsed = queryString.parse(search);

  // Get current page and current query
  const { page, ...rest } = parsed;
  const newParams = new URLSearchParams({
    ...rest,
  });

  const nextPage = (parseInt(page, 10) || 1) + 1;
  const next = () => {
    if(nextPage <= total) {
      newParams.append('page', nextPage);
      history.push({ search: newParams.toString() });
      window.scrollTo(0, 0);
    }
  };

  const prevPage = (parseInt(page, 10) || 1) - 1;

  const prev = () => {
    if(prevPage !== 1) {
      newParams.append('page', prevPage);
    }

    if(prevPage > 0) {
      history.push({ search: newParams.toString() });
      window.scrollTo(0, 0);
    }
  };

  return (
    <Container>
      <PaginationWrapper>
        {
          prevPage > 0 && (
            <Button onClick={prev}>
              <FaArrowLeft />
              Prev Page
            </Button>
          )
        }

        {
          nextPage <= total && (
            <Button
              next
              onClick={next}
            >
              Next Page
              <FaArrowRight />
            </Button>
          )
        }
      </PaginationWrapper>
    </Container>
  );
};

export default Pagination;
