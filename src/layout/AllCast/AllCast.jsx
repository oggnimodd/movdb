import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'twin.macro';

import {
  DetailsWrapper,
  Backdrop,
  GradientTransition,
  Content,
  StyledContainer,
} from '../../shared/Details';
import {
  CreditsColumn,
  ColumnHeader,
  Sub,
  SubHeader,
} from './AllCast.style';
import CastCard from '../CastCard/CastCard';

import 'react-lazy-load-image-component/src/effects/opacity.css';

const baseURL = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';

const ColHeader = ({ length, title }) => {
  return (
    <ColumnHeader>
      <p>
        {title}
      </p>
      <p>
        ({length})
      </p>
    </ColumnHeader>
  );
};

const SubSection = ({ member, name }) => {
  return (
    <Sub>
      <SubHeader>{name}</SubHeader>
      {
        member.length > 0 && member.map((i) => {
          return (
            <CastCard
              key={`cast${i.id}${Math.random()}`}
              info={i}
            />
          );
        })
      }
    </Sub>
  );
};

const createDepartmentList = (crew) => {
  let length = crew.length;
  const list = [];

  for (let i = 0; i < crew.length; i += 1) {
    const current = crew[i];
    const dep = current.department;
    // Check if exists in list or not
    const exist = list.filter((j) => j.name === dep);

    if(exist.length === 0) {
      // Add if not exist
      list.push({
        name: dep,
        member: [current],
      });
    }else{
      // Find position
      const depIndex = list.map((i) => i.name).indexOf(dep);
      const prevMember = list[depIndex].member;

      const double = prevMember.filter((i) => i.id === current.id);

      if(double.length === 0) {
        // Add to member
        const newMember = [...prevMember, current];
        list[depIndex].member = newMember;
      }else{
        // Find position in member array
        const memberIndex = prevMember.map((i) => i.id).indexOf(current.id);

        // Combine jobs
        const prevJob = prevMember[memberIndex].job;
        const currentJob = current.job;
        const combineJob = `${prevJob}, ${currentJob}`;

        // Create new member info with new job
        const updatedMember = {
          ...(prevMember[memberIndex]),
          job: combineJob,
        };

        // Update member info
        list[depIndex].member[memberIndex] = updatedMember;

        // Decrement length
        length -= 1;
      }
    }
  }

  const sorted = list.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.firstname > b.name) {
      return 1;
    }
    return 0;
  });

  // Sort alphabetically
  return { sorted, length };
};

const AllCast = ({ details }) => {
  const { backdrop_path: backdrop, title } = details;
  const { cast, crew } = details?.credits || {};

  const { sorted: departementList, length } = createDepartmentList(crew);

  return (
    <DetailsWrapper>
      <Backdrop>
        <GradientTransition />
        <LazyLoadImage
          src={baseURL + backdrop}
          alt={title}
          effect="opacity"
        />
      </Backdrop>
      <StyledContainer>
        <Content>
          {/* Insert Section Header here */}

          {/* Insert Row here */}
          <div tw="flex flex-wrap justify-between gap-y-16">
            <CreditsColumn>
              <ColHeader
                title="Cast"
                length={cast.length}
              />
              {
                cast.length > 0 && cast.map((i) => {
                  return (
                    <CastCard
                      key={`cast${i.id}`}
                      info={i}
                    />
                  );
                })
              }
            </CreditsColumn>
            <CreditsColumn>
              <ColHeader
                title="Crew"
                length={length}
              />
              {
                departementList.length > 0 && departementList.map((i) => {
                  return (
                    <SubSection
                      name={i.name}
                      member={i.member}
                      key={`dep ${i.name}`}
                    />
                  );
                })
              }
            </CreditsColumn>
          </div>
        </Content>
      </StyledContainer>
    </DetailsWrapper>
  );
};

export default AllCast;
