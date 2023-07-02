import React from "react";
function Contact(){
    return(
        <div class="card p-4">
          <h2 class="text-center">Contact Me</h2>
          <form id="contactForm" action="javascript:void(0);">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                class="form-control"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success">Send Message</button>
          </form>
        </div>
        )
}

export default Contact;