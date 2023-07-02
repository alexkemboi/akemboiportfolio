import React from "react";
function Skills(){
    return(
        <div className="m-5">
            <h2 className="text-center">Tech Stack</h2>
            <div className="row">
            <div className="col-6 col-md-2">
                <i className="fab fa-html5 text-danger fa-4x"></i>
                <p>HTML</p>
            </div>
            <div className="col-6 col-md-2">
                <i className="fab fa-css3-alt text-primary fa-4x"></i>
                <p>CSS</p>
            </div>
            <div className="col-6 col-md-2">
                <i className="fab fa-js text-warning fa-4x"></i>
                <p>JavaScript</p>
            </div>
            <div className="col-6 col-md-2">
                <i className="fab fa-react text-info fa-4x"></i>
                <p>React</p>
            </div>
            <div className="col-6 col-md-2">
                <i className="fas fa-database text-success fa-4x"></i>
                <p>MySQL</p>
            </div>
            <div className="col-6 col-md-2">
                <i className="fab fa-git-alt text-dark fa-4x"></i>
                <p>Git</p>
            </div>
            <div className="col-6 col-md-2">
                <i className="fab fa-cuttlefish text-secondary fa-4x"></i>
                <p>C#</p>
            </div>
            </div>
      </div>
      
        )
}

export default Skills;