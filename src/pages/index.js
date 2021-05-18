import React from 'react';
import avatar from '../assets/images/logo.png';
import Layout from '../components/Layout';
import "@fontsource/aleo"

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about" style={{backgroundColor: "#F0F0F0"}}
      >
        <div className="w-100">

          <h1 className="mb-0">


            {/* <span className="text-primary">{config.lastName}</span> */}
          </h1>
          <img className="img-fluid img-profile square mx-auto mb-2" src={avatar}/>
          <div className="subheading mb-5">
          {/* {config.email} */}


          </div>

          {/* <p className="lead mb-5">
    Jordan to add home page content (if any)
          </p> */}

        </div>
      </section>
      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="services"
      >
        <div className="w-100">
          <h2 className="mb-5">Services</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Service 1</h3>
              <div className="subheading mb-3">Description of service</div>
            </div>
            <div className="resume-date text-md-right">
            </div>
          </div>


        </div>
      </section>
      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Position</h3>
              <div className="subheading mb-3">Company</div>
              <p>
description
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2013 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Position</h3>
              <div className="subheading mb-3">Company</div>
              <p>
Description
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dates</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Position</h3>
              <div className="subheading mb-3">Company</div>
              <p>
Description
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dates</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Position</h3>
              <div className="subheading mb-3">Company</div>
              <p>
   Description
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dates</span>
            </div>
          </div>
        </div>
      </section>



      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>



          {/* <div className="subheading mb-3">Workflow</div> */}
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Emerson DeltaV
              <a href="https://www.emerson.com/en-us/automation/brands/deltav/deltav-version-14"> more info</a>
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Skill 2
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Skill 3
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Skill 4
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="contact"
      >
        <div className="w-100">
          <h2 className="mb-5">Contact</h2>
          <p style={{paddingBottom:'20px'}}>
            {/* Email */}
            <a href={`mailto:${config.email}`}>{config.email}</a>
{/* Email  add email icon */}
          </p>
          <p className="mb-0">
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={` ${icon}`}></i>
                </a>
              );
            })}
          </div>
          </p>
        </div>
      </section>

      <hr className="m-0" />


    </div>
  </Layout>
);

export default IndexPage;
