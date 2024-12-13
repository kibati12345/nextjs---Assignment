import React from 'react';

const About = () => (
  <div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          {/* Add the image here */}
          <img
            src="http://localhost:1337/uploads/IMG_3767_b82bb64501.jpg" // Replace <image_file_name> with the actual file name or dynamically load from API.
            alt="Omotosho Oluwakibati"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h1>Omotosho Oluwakibati</h1>
          <h2>From: Canada</h2>
          <p className="lead">Dear Hiring Manager,</p>
          <p>
            I am a dedicated and driven individual currently pursuing my degree in Human Resources. With a passion for both technology and creative expression, I have honed my skills in coding, particularly in designing aspects like CSS, as well as in various artistic endeavors such as fashion design and abstract art creation.
          </p>
          <p>
            Throughout my academic journey, I have developed a strong foundation in web development, with a particular interest in front-end design. I am proficient in using HTML, CSS, JavaScript, and various frameworks to create visually appealing and user-friendly websites. Additionally, my hands-on experience with COBOL and JCL has enhanced my technical proficiency, particularly in the context of calculations and data management.
          </p>
          <p>
            Upon graduation, I am seeking opportunities in front-end web development or any role that allows me to leverage my artistic talents and technical skills to create innovative and engaging user experiences. I am particularly interested in positions that offer a dynamic and collaborative environment where I can continue to learn and grow as a professional.
          </p>
          <p>Thank you for considering my application. I look forward to the opportunity to discuss how my background, skills, and enthusiasm can contribute to your team.</p>
          <p>Sincerely,</p>
          <p>Omotosho Oluwakibati</p>
        </div>
      </div>

      <div className="accordion mt-5" id="faqAccordion">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What are your key skills?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <p>
                I am proficient in HTML, CSS, JavaScript, and various frameworks
                for front-end development. I also have experience with COBOL
                and JCL for backend processing.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What kind of job are you looking for?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <p>
                I am looking for a role in front-end web development or any
                position that allows me to utilize my creative and technical
                skills to create engaging user experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is your educational background?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <p>
                I am currently pursuing a degree in Human Resources, with
                additional coursework and hands-on experience in web
                development and coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
