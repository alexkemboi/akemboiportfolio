import React from "react";
function Footer(){
    return(
       
      <section>
        <footer id="footer" class="bg-white">
          <p className="text-center">
            I'm currently available and you can hire me to develop your dream project! If you know of any projects available or if you have
            any questions, or if you just want to say hi, please feel free to
            email me at alexkipchirchirkemboi@gmail.com
          </p>
          <div class="container-fluid">
            <div class="social-icons mt-4 text-center">
              <a
                href="https://www.linkedin.com/in/alex-kemboi-9642a3166"
                target="_blank"
                ><i class="fab text-dark fa-linkedin fa-4x"></i
              ></a>
              <a href="https://www.twitter.com/alexkemboi97" target="_blank"
                ><i class="fab text-dark fa-twitter fa-4x"></i
              ></a>
              <a href="https://www.github.com/alexkemboi" target="_blank"
                ><i class="fab text-dark fa-github fa-4x"></i
              ></a>
            </div>
          </div>
        </footer>
      </section>
        )
}

export default Footer;