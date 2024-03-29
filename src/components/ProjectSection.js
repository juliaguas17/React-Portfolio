import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import projects from '../assets/data/projects';

// install Swiper modules
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  background-color: var(--cambridge-blue);
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
  }
  .swiper-container {
    padding-top: 4rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--sage);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--linen);
    border-radius: 8px;
    border: 2px solid var(--raisin-black);
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .swiper-container {
      align-items: center;
    }
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 1rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function ProjectSection() {
  return (
    <ProjectSectionStyle>
        <div className='container'>
            <SectionTitle heading='My Projects' subheading="Here you can view some of my recent work..."/>
            <div className="projects__allItems">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                    // when window width is >= 640px
                        640: {
                        slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                        slidesPerView: 2,
                        },
                        // when window width is >= 1200px
                        1200: {
                        slidesPerView: 3,
                        },
                    }}
                    >

                    {projects.map((project, index) => {
                        if(index >= 4) return;
                        return (
                          <SwiperSlide key={project.id}>
                            <ProjectItem
                                title={project.name}
                                img={project.img}
                                desc={project.desc}
                            />
                          </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    </ProjectSectionStyle>
  );
}
