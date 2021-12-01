import React from 'react';
import { HeaderWrapper, PageName, PageCount } from './Header.style';
import { Container } from '../Flexi';

const Header = ({
  title, page, total, shelf,
}) => {
  return (
    <Container>
      <HeaderWrapper>
        <PageName>
          {title}
        </PageName>

        <PageCount>
          {
            shelf
              ? <p>Total Movies : {total} </p>
              : total > 0 && <p>Page {page} of {total} </p>
          }
        </PageCount>

      </HeaderWrapper>
    </Container>
  );
};

export default Header;
