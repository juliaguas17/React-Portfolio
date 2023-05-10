import React from 'react';
import PText from '../components/PText';
import styled from 'styled-components';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-sec-img.jpg';

const AboutPageStyles = styled.div`
  padding: 8rem 0 8rem 0;
  background-color: var(--cambridge-blue);
  text-shadow: -1px 1px 0 var(--raisin-black),
				  2px 1px 0 var(--raisin-black),
				  1px -1px 0 var(--raisin-black);
				  -2px -2px 0 var(--raisin-black);
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 2;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    color: var(--blush);
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--linen);
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
  }
`;


export default function About() {
    return (
      <>
      <AboutPageStyles>
        <div className='container'>
          <div className='top-section'>
            <div className='left'>
              <p className='about__subheading'>
                Hi, I'm Julianne!
              </p>
              <h2 className="about__heading">Full-stack Web Developer</h2>
              <div className="about__info">
                <PText>
                My collegiate background is primarily in STEM & Labor Economics. I am currently pursuing a professional certificate in full-stack web development through University of Kansas. When I'm not coding, I enjoy making art, candles and soap, as well as playing RPGs with my friends.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
        </div>
      </AboutPageStyles>
      </>
    );
  }
