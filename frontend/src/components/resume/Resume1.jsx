import React from 'react'
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import '../../assets/CSS/Resume1.css'

export default function Resume1() {
  
  return (
    <>

      <main className="main-content">
        <section className="left-section">
          <div className="left-content">
            <div className="profile">
              <div className="image">
                <img
                  src="https://art-template.ru/vcard1/assets/img/avatar-1.jpg"
                  alt="profile"
                />
              </div>
              <h2 className="name">Name</h2>
              <p className="career">Professtion</p>
            </div>
            <div className="contact-info">
              <h3 className="main-title">Contact Info</h3>
              <ul>
                <li>
                  <i className="fa fa-phone" />
                  07777777700
                </li>
                <li>
                  <i className="fa fa-fax" />
                  example@gmail.com
                </li>
                <li>
                  <i className="fa fa-globe" />
                  www.example.com
                </li>
                <li>
                  <i className="fa fa-facebook" />
                  www.facebook.com/example
                </li>
                <li>
                  <i className="fa fa-instagram" />
                  @example
                </li>
                <li>
                  <i className="fa-map-marker fa" />
                  No :01 example, example.
                </li>
              </ul>
            </div>
            <div className="skills-section">
              <h3 className="main-title">Skills</h3>
              <ul>
                <li>
                  <p className="skill-title">example</p>
                  <div className="progress-bar">
                    <div className="js-progress progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">example</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">example</p>
                  <div className="progress-bar">
                    <div className="j-progress progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">example</p>
                  <div className="progress-bar">
                    <div className="c-progress progress" />
                  </div>
                </li>
                
              </ul>
            </div>
            <div className="references-section">
              <h3 className="main-title">References</h3>
              <div className="referee">
                <h6 className="sub-title">example</h6>
                <p className="sub-para">example</p>
                <ul>
                  <li>
                    <i className="fa fa-phone" />
                    077777777777
                  </li>
                  <li>
                    <i className="fa fa-fax" />
                    example@gmail.com
                  </li>
                </ul>
              </div>
              <div className="referee">
                <h6 className="sub-title">example</h6>
                <p className="sub-para">Position</p>
                <ul>
                  <li>
                    <i className="fa fa-phone" />
                    076612345220
                  </li>
                  <li>
                    <i className="fa fa-fax" />
                    example@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="right-section">
          <div className="right-main-content">
            <section className="about sect">
              <h2 className="right-title">About Me</h2>
              <p className="para">
                Name is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. 
                <br />
                Name is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. 
              </p>
            </section>
            <section className="experince sect">
              <h2 className="right-title">Experience</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Profestion</h5>
                  <p className="para">2017 - 2019</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Position</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam odio
                      nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Profestion</h5>
                  <p className="para">2020 - Present</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Position</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam odio
                      nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="education sect">
              <h2 className="right-title">education</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title"> School Name</h5>
                  <p className="para">2016 - 2018</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">School Name</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam odio
                      nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">University</h5>
                  <p className="para">2018 - Present</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">degree</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam odio
                      nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
            </section>
           
          </div>
        </section>
      </main>

    </>
  )
}
