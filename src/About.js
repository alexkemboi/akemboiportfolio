import React from "react";
import Main from "./Main.js";
function About(){
    return(
        <div>
           <section id="about">
                    <div class="p-4">
                    <h1 class="text-center">About Me</h1>
                    <div class="row">
                        <div class="col-lg-4">
                            <Main/>
                        </div>
                        <div class="col-lg-8">
                        <p>
                            My name is Alex Kemboi. I’m a graduate from Kisii University in
                            Kenya with a degree in Software Engineering. I'm most passionate
                            about giving back to the community, and my goal is to pursue
                            this passion within the field of software engineering. In my
                            free time I like working on open source projects. I seek to grow
                            my career in a progressive organization where the blend of my
                            talents and enhanced education skills will help to achieve the
                            goals of the organization.
                        </p>
                        <div class="row mt-3">
                            <div class="col-md-6">
                            <ul>
                                <li>Name: Alex Kemboi</li>
                                <li>Contacts: +254726837210</li>
                                <li>Occupation: Software Developer</li>
                            </ul>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <p>
                            I enjoy being challenged and engaging with projects that
                            require me to work outside my comfort and knowledge set as I
                            continuing to learn and develop techniques that are important
                            to me
                            </p>
                        </div>
                        <div class="d-flex justify-content-centre">
              <div class="social-icons text-center justify-content-center m-auto p-4">
                    <button
                type="button"
                class="btn btn-light border-1-solid-dark m-3"
                onclick="downloadCV()"
              >
                <i class="fas fa-file mr-1"></i>Resume
              </button>
                <a
                  href="https://www.linkedin.com/in/alex-kemboi-9642a3166"
                  target="_blank"
                  ><i class="fab text-dark fa-linkedin fa-2x"></i
                ></a>
                <a href="https://www.twitter.com/alexkemboi97" target="_blank"
                  ><i class="fab text-dark fa-twitter fa-2x"></i
                ></a>
                <a href="https://www.github.com/alexkemboi" target="_blank"
                  ><i class="fab text-dark fa-github fa-2x"></i
                ></a>
                        <button
                        type="button"
                        class="btn btn-dark border-1-solid-black mt-1 m-auto"
                        onclick="downloadAbout()"
                        >
                        <i class="fas fa-file mr-1"></i>More
                        </button>
              </div>
                    </div>
                        </div>
                    </div>
                   
                    </div>
            </section>
        </div>
    )
}
export default About;