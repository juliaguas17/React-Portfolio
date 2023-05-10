import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: var(--cambridge-blue);
  }
  .hero__heading {
    margin-top: 4rem;
    line-height: 4rem;
    font-size: 2rem;
    margin-bottom: 1rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      margin: 0.4rem;
      font-family: 'BoltonTitling';
      font-size: 5rem;
      color: var(--blush);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 700px;
    margin: 0 auto;
    border: 2px solid var(--linen);
  }
  .hero__info {
    margin-top: -18rem;
  }

  @media only screen and (max-width: 768px) {
    .hero {
      margin-top: -5rem;
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -0.4rem;
      .hero__name {
        font-size: 3rem;
        margin-top: -1rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 1rem;
      margin-bottom: -4rem;
    }
  }
`;

export default function HeroSection() {
    return (
      <HeroStyles>
        <div className="hero">
          <div className="container">
            <h1 className="hero__heading">
              <span>Hello, this is</span>
              <span className="hero__name">Julianne Waters</span>
            </h1>
            <div className="hero__img">
              <img src={HeroImg} alt="" />
            </div>
            <div className="hero__info">
              <PText>
                Welcome to my portfolio website! I am a web developer who has been coding since 2015. I enjoy finding creative solutions to technical problems in a variety of fields.
              </PText>
              <Button btnText="My Work" btnLink="/projects" />
            </div>
            </div>
        </div>
      </HeroStyles>
    );
  }