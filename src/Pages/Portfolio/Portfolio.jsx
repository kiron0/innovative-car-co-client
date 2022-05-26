import React from "react";
import "./Portfolio.css";
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import {
  RiDownloadLine,
  RiMessengerLine,
  RiWhatsappLine,
} from "react-icons/ri";
import Projects from "./Projects";
import Skills from "./Skills";
import useTitle from "../../hooks/useTitle";

const Portfolio = () => {
  useTitle("Portfolio");
  return (
    <div className="block lg:flex justify-center items-center mx-auto lg:w-2/3 lg:min-h-[90vh]">
      <div class="profile container mx-auto">
        <div class="profile__container grid mx-auto">
          <div class="profile__data">
            <div class="avatar py-4">
              <div class="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                <img
                  src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/166815117_463560824762039_628846044693183076_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEQ-RDIPT9lOmpZ5I_fxcHCpbsu__A6HX2luy7_8DodfbSOeMU8ilGu4ZCMqwG2147LRTBHInWPYvqSxQEfulS5&_nc_ohc=PWZOvVINoosAX8zvoeW&_nc_ht=scontent.fdac31-1.fna&oh=00_AT-MAtSCfGVE-J1YT1vOGxGFTnmiHtflgoykX4kYHsvMDQ&oe=62B66A6E"
                  alt=""
                />
              </div>
            </div>

            <h2 class="profile__name">Toufiq Hasan Kiron</h2>
            <h3 class="profile__profession">Web developer</h3>

            <ul class="profile__social">
              <a
                href="https://www.instagram.com/toufiq_hasan_kiron/"
                target="_blank"
                rel="noopener noreferrer"
                class="profile__social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/toufiq-hasan-kiron/"
                target="_blank"
                rel="noopener noreferrer"
                class="profile__social-link"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/kiron0"
                target="_blank"
                rel="noopener noreferrer"
                class="profile__social-link"
              >
                <FiGithub />
              </a>
            </ul>
          </div>

          <div class="profile__info grid">
            <div class="profile__info-group">
              <h3 class="profile__info-number">2</h3>
              <p class="profile__info-description">
                Years of <br /> work
              </p>
            </div>
            <div class="profile__info-group">
              <h3 class="profile__info-number">+102</h3>
              <p class="profile__info-description">
                Completed <br /> projects
              </p>
            </div>
            <div class="profile__info-group">
              <h3 class="profile__info-number">96</h3>
              <p class="profile__info-description">
                Satisfied <br /> customers
              </p>
            </div>
          </div>

          <div class="profile__buttons">
            <a download="" href="/" class="button">
              Download CV <RiDownloadLine />
            </a>

            <div class="profile__buttons-small">
              <a
                href="/"
                target="_blank"
                class="button button__small button__gray"
              >
                <RiWhatsappLine className="text-2xl" />
              </a>
              <a
                href="/"
                target="_blank"
                class="button button__small button__gray"
              >
                <RiMessengerLine className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <Skills></Skills>
      </div>

      <main class="main py-6">
        <section class="filters container mx-auto px-4">
          <div class="filters__sections">
            <Projects></Projects>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
