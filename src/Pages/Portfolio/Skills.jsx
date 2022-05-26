import React from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3,
  FaBootstrap,
  FaGit,
  FaNodeJs,
  FaReact,
  FaStripe,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  return (
    <div class="skills__content grid mx-auto py-12" data-content id="skills">
      <div class="skills__area">
        <h3 class="skills__title">Frontend Developer</h3>

        <div class="skills__box">
          <div class="skills__group">
            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  HTML <AiFillHtml5></AiFillHtml5>
                </h3>
                <span class="skills__level">Basic</span>
              </div>
            </div>

            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  CSS <FaCss3></FaCss3>
                </h3>
                <span class="skills__level">Advanced</span>
              </div>
            </div>

            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  JavaScript <SiJavascript></SiJavascript>
                </h3>
                <span class="skills__level">Intermediate</span>
              </div>
            </div>
          </div>

          <div class="skills__group">
            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  React <FaReact></FaReact>
                </h3>
                <span class="skills__level">Intermediate</span>
              </div>
            </div>

            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  Bootstrap <FaBootstrap></FaBootstrap>
                </h3>
                <span class="skills__level">Intermediate</span>
              </div>
            </div>

            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  Git <FaGit></FaGit>
                </h3>
                <span class="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills__area">
        <h3 class="skills__title">Backend Developer</h3>

        <div class="skills__box">
          <div class="skills__group">
            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  MongoDB <SiMongodb></SiMongodb>
                </h3>
                <span class="skills__level">Intermediate</span>
              </div>
            </div>

            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  Express JS <SiExpress></SiExpress>
                </h3>
                <span class="skills__level">Advance</span>
              </div>
            </div>

            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  Firebase <SiFirebase></SiFirebase>
                </h3>
                <span class="skills__level">Intermediate</span>
              </div>
            </div>
          </div>

          <div class="skills__group">
            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  Stripe <FaStripe></FaStripe>
                </h3>
                <span class="skills__level">Basic</span>
              </div>
            </div>

            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  Node Js <FaNodeJs></FaNodeJs>
                </h3>
                <span class="skills__level">Intermediate</span>
              </div>
            </div>
            <div class="skills__data">
              <RiCheckboxCircleLine />

              <div>
                <h3 class="skills__name flex items-center gap-1">
                  JWT <SiJsonwebtokens></SiJsonwebtokens>
                </h3>
                <span class="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
