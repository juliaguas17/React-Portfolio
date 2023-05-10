import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.jpg';

const AboutSectionStyles = styled.div`
  background-color: var(--cambridge-blue);
  padding: 10rem 0;
  .aboutImg {
    height: 800px;
    border: 2px solid var(--white);
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
    margin-right: 2rem;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .aboutImg {
        display: none;
    }
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

export default function AboutSection() {
    return (
      <AboutSectionStyles>
        <div className="container">
          <div className="aboutSection__left">
            <SectionTitle
              subheading="Let me introduce myself..."
              heading="About Me"
            />
            <PText>
            My collegiate background is primarily in STEM & Labor Economics. I’m currently pursuing a professional certificate in Full Stack Web Development. Some of the programming languages and technologies I've previously studied include Python, R, SQL, and Java.
            </PText>
          </div>
          <div className="aboutSection__right">
            <img className="aboutImg" src={AboutImg} alt="about image" />
          </div>
        </div>
      </AboutSectionStyles>
    );
  }