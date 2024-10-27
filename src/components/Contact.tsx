function Contact() {
  return (
    <>
      <div className="contact-div" id="Contact">
        <h1 className="danfo-font">Contact Me</h1>
        <div className="contact-form">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="88bebb3c-da99-487e-9aa0-035d78fa6ea0"
            ></input>
            <input
              type="text"
              placeholder="Your name here..."
              name="name"
              className="contactInput"
              required
            ></input>
            <input
              type="text"
              placeholder="Your email here..."
              name="email"
              className="contactInput"
              required
            ></input>
            <textarea
              name="message"
              placeholder="Your message here..."
              className="contactInput"
              rows={5}
              required
            ></textarea>
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
            ></input>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Contact;
