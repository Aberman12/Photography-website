import React from "react";
import $ from "jquery";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {}

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:3003/api/send",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        window.alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        window.alert("Message failed to send.");
      }
    });
  }

  render() {
    return (
      <div className="contact">
        <h1 className="contact-title">
          <strong>Contact</strong>
        </h1>
        <p className="contact-title-p">
          Have a question or want to work together?
        </p>
        <form
          className="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              id="name"
            />
          </div>
          <div className="form-group">
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="email"
            />
          </div>
          <div className="form-group">
            {/* <label for="message">Message</label> */}
            <textarea
              placeholder="message"
              className="form-control"
              rows="5"
              id="message"
            />
          </div>
          <button
            type="submit"
            onClick={() => this.resetForm()}
            className="btn btn-default"
          >
            Send
          </button>
        </form>
        {/* <div className="my-social">
          <ul className="social">
            <a
              target="_blank"
              href="https://www.instagram.com/alexbermanphotography/"
            >
              <li>
                <img src="#" className="linkedin-icon icon2" />
              </li>
            </a>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Contact;
