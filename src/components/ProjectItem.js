import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from "../assets/images/projectImg.png";

const ProjectItemStyles = styled.div`
    .projectItem__img {
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        img {
            height: 100%
        }
    }
    .projectItem__info {
        margin-top: 1rem;
        background-color: var(--linen);
        padding: 1rem;
        border-radius: 12px;
        border: 2px solid var(--blush);
    }
    .projectItem__title {
        font-size: 2.2rem;
    }
    .projectItem__desc {
        font-size: 1.6rem;
        font-family: "BoltonLight";
        margin-top: 1rem;
    }
    @media only screen and (max-width: 768px) {
        .projectItem__img {
          height: 350px;
        }
    }
`;

export default function ProjectItem({
    img = ProjectImg,
    title = 'Project Name',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }) {
    return (
      <ProjectItemStyles>
        <Link to="/projects" className="projectItem__img">
          <img src={img} alt="project img" />
        </Link>
        <div className="projectItem__info">
          <Link to="#">
            <h3 className="projectItem__title">{title}</h3>
          </Link>
          <h6 className="projectItem__desc">{desc}</h6>
        </div>
      </ProjectItemStyles>
    );
  }
