import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { GoLocation } from "react-icons/go";
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5kxtgs2",
        "template_hz2fh75",
        formRef.current,
        "MUA9TG7YqNACnzmup"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  return (
    <div
      className="c bg-[#0a192f] text-white flex items-center z-10"
      id="contact"
    >
      <div className="c-bg bg-slate-800"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <FiPhoneCall className="text-2xl text-[#64ffda] mr-2"></FiPhoneCall>
              01724508932
            </div>
            <div className="c-info-item">
              <SiGmail className="text-2xl text-[#64ffda] mr-2"></SiGmail>
              monirulsifat@gmail.com
            </div>
            <div className="c-info-item">
              <GoLocation className="text-2xl text-[#64ffda] mr-2"></GoLocation>
              Chittagong,Bangladesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="w-full">
            <b>Contact here if you need any information</b>.Always available for
            projects that are in my niche.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="w-full">
            <input
              className="block "
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              className="block "
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              className="block "
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              className="text-black"
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button className="px-6 py-2 bg-slate-600 text-white font-medium border-none cursor-pointer">
              Send
            </button>
            {done && <p className="text-2xl ">Thank You for messaging us!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
