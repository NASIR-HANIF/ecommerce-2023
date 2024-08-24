import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus mt-5" style={{ minHeight: "90vh" }}>
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="Contact Us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 text-center">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <address>
            <p className="text-justify mt-2">
              For any queries or information about our products, feel free to call us anytime. We are available 24/7 to assist you.
            </p>
            <p className="mt-3">
              <span className="icon"><BiMailSend /></span> Email: <a href="mailto:nasir127sb@gmail.com">nasir127sb@gmail.com</a>
            </p>
            <p className="mt-3">
              <span className="icon"><BiPhoneCall /></span> Phone: <a href="tel:+923170046777">+92 317 0046777</a>
            </p>
            <p className="mt-3">
              <span className="icon"><BiSupport /></span> Toll-Free: <a href="tel:00923170046777">0092 317 0046777</a>
            </p>
          </address>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
