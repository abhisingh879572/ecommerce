import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { Button } from "antd";
const Contact = () => {
  return (
    <div className="">
      <Layout title={"Contact us"}>
        <div className="row contactus mt-4 ">
          <div className="col-sm-6 ">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-sm-4">
            <h1>Contact</h1>
            <div className="row">
              <div className="col-sm-6">
                <label>Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-sm-6">
                <label>Email</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label>Number</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label>Massage</label>
                <textarea type="text" className="form-control" />
              </div>
            </div>
            <button className="mb-5 mt-2 btn btn-dark text-right">
              Submit
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
