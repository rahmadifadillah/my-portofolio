import { React, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";

import mailValidate from "../../helpers/validate";

import "./contact.css";

const Contact = () => {
  const [currentMonthYear, setCurrentMonthYear] = useState("");
  const form = useRef();

  const formEmail = (e) => {
    e.preventDefault();
    sendEmail();
    formik.handleSubmit();
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_fo18hvg",
        "template_b4w0s8a",
        form.current,
        "ELbRY1syUi0Kf9xmN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      company: "",
      message: "",
    },
    validate: mailValidate,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const getCurrentMonthYear = () => {
    const currentDate = new Date();
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const currentMonth = monthNames[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();
    return `${currentMonth}, ${currentYear}`;
  };

  useEffect(() => {
    setCurrentMonthYear(getCurrentMonthYear());
  }, []);

  return (
    <section className="contact">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="info__contact" id="info__contact">
        <div className="contact__text">
          <h1> Let's work together and create something amazing</h1>
        </div>
        <div className="contact__link">
          <form ref={form} onSubmit={formEmail}>
            <div className="form__initial">
              <input
                {...formik.getFieldProps("name")}
                type="text"
                className="input-user"
                placeholder="Name"
                name="name"
                id="name"
              />
              <input
                {...formik.getFieldProps("email")}
                type="email"
                className="input-user"
                placeholder="Email"
                name="email"
                id="email"
              />
              <input
                {...formik.getFieldProps("subject")}
                type="text"
                className="input-user"
                placeholder="Subject"
                name="subject"
                id="subject"
              />
              <input
                {...formik.getFieldProps("company")}
                type="text"
                className="input-user"
                placeholder="Company"
                name="company"
                id="company"
              />
            </div>
            <textarea
              {...formik.getFieldProps("message")}
              placeholder="Message"
              className="input-user"
              rows="3"
              name="message"
              id="message"
            />
            <button className="contact__email" type="submit">
              Send it!
            </button>
          </form>
        </div>
      </div>
      <div className="contact__footer">
        <span>{currentMonthYear}</span>
        <span>@rahmadi.fadillah</span>
      </div>
    </section>
  );
};

export default Contact;
