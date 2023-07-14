import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-changes.css";

import Project from "./Project.jsx";
import { ProjectData } from "../data/projects.js";

function ProjectList() {
  var settings = {
    dots: true,
    className: "center",
    centerPadding: "60px",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1664,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {ProjectData.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          body={project.body}
          image={project.image}
        />
      ))}
    </Slider>
  );
}

export default ProjectList;
