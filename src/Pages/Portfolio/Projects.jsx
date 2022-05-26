import React from "react";
import project1 from "../../Assets/project/project1.jpg";
import project2 from "../../Assets/project/project2.jpg";
import project3 from "../../Assets/project/project3.jpg";
import project4 from "../../Assets/project/project4.jpg";

import { RiLink } from "react-icons/ri";

const Projects = () => {
  return (
    <div
      class="projects__content grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto filters__active"
      data-content
      id="projects"
    >
      <article class="projects__card">
        <img src={project1} alt="" class="projects__img" />

        <div class="projects__modal">
          <div>
            <span class="projects__subtitle">Web</span>
            <h3 class="projects__title">Portfolio</h3>
            <a
              href="https://kiron0.github.io/my-portfolio-22/"
              target="_blank"
              rel="noopener noreferrer"
              class="projects__button button button__small"
            >
              <RiLink />
            </a>
          </div>
        </div>
      </article>

      <article class="projects__card">
        <img src={project2} alt="" class="projects__img" />

        <div class="projects__modal">
          <div>
            <span class="projects__subtitle">Web</span>
            <h3 class="projects__title">To Do Task</h3>
            <a
              href="https://todo-web-app-9174e.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="projects__button button button__small"
            >
              <RiLink />
            </a>
          </div>
        </div>
      </article>

      <article class="projects__card">
        <img src={project3} alt="" class="projects__img" />

        <div class="projects__modal">
          <div>
            <span class="projects__subtitle">Web</span>
            <h3 class="projects__title">Search Github Users</h3>
            <a
              href="https://kiron0.github.io/github_users/"
              target="_blank"
              rel="noopener noreferrer"
              class="projects__button button button__small"
            >
              <RiLink />
            </a>
          </div>
        </div>
      </article>

      <article class="projects__card">
        <img src={project4} alt="" class="projects__img" />

        <div class="projects__modal">
          <div>
            <span class="projects__subtitle">Web</span>
            <h3 class="projects__title">Sports Car Store</h3>
            <a
              href="https://sports-car-store.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="projects__button button button__small"
            >
              <RiLink />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Projects;
