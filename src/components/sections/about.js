import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const langaugesAndFrameworksSkills = [
    'Javascript',
    'Typescript',
    'RxJs',
    'NodeJs',
    'ExpressJs',
    'Koa',
    'Angular 2-10',
    'NgRx(Redux)',
    'Vue',
    'C#',
    '.Net',
    '.NetCore',
    'EntityFramework',
    'TypeOrm',
    'Knex',
    'Dapper',
  ];
  const databaseSkills = ['MySQL', 'PostgreSQL', 'SQLServer', 'MongoDb'];
  const cicdSkills = ['Docker', 'Bitbucket Pipelines', 'DbUP', 'Octopus Deploy', 'AWS'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Vast experience, on national and foreign companies, in leading the technical part of
              projects in the web development segment. Worked on the development of two major ERP's,
              and other big applications in different areas, such as the oil industry,
              telecommunications, press, accounting, mass manufacturing, music as well as GIS.
              Working using agile methodologies, mainly Scrum and Kanban.
            </p>

            <p>
              I'm a full-stack developer that loves to code with simplicity and efficiency and using
              always the <b>SOLID</b> principles to deliver a well-structured and maintainable code.
              I have worked with a lot of languages and frameworks but these are the ones that I'm
              currently more experienced and focused on are:
            </p>

            <h6 className="skills-list-section">Languages and Frameworks</h6>
            <ul className="skills-list">
              {langaugesAndFrameworksSkills &&
                langaugesAndFrameworksSkills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>

            <h6 className="skills-list-section">Databases</h6>
            <ul className="skills-list">
              {databaseSkills && databaseSkills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>

            <h6 className="skills-list-section">CI\CD</h6>
            <ul className="skills-list">
              {cicdSkills && cicdSkills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
