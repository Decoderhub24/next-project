import React from "react";
import Navbar from '../components/navbar';
import Subscribe from '../components/subscribe';
import Footerlast from '../components/footerlast';
import styles from '../styles/About.module.scss';
import supportStyles from '../styles/Supportsection.module.scss';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.aboutpage}>
        <div className={styles.imagesection}></div>
        <div className={styles.text}>
          <h1>About Us</h1>
          <h2>Home <span> / About Us</span></h2>
        </div>
      </div>

      {/* New Content Section */}
      <div className={styles.contentSection}>
        {/* Left Text Section */}
        <div className={styles.leftContent}>
          <h2>We Are The Right Solution <br /> <span>For Your Business</span></h2>
          <p>
            HiTech Solutions & Services is one of the premier business solution providers in Nepal, 
            serving its valued clients since 1998. We have our support and marketing offices scattered 
            not only in Kathmandu but almost all over Nepal. For today's demanding business environment, 
            we are committed to delivering quality products, services, and solutions that enrich businesses 
            and the lives around them.
          </p>
        </div>

        {/* Right Image Section */}
        <div className={styles.rightImages}>
          <div className={styles.leftImages}>
            <div className={styles.imageCard}>
              <img src="https://hitechnepal.com/images/headway-5QgIuuBxKwM-unsplash.jpg" alt="Our Strength" />
              <div className={styles.overlay}>Our Strength</div>
            </div>
            <div className={styles.imageCard}>
              <img src="https://hitechnepal.com/images/proxyclick-visitor-management-system-wsHvGRpT8Eo-unsplash.jpg" alt="Our Goals" />
              <div className={styles.overlay}>Our Goals</div>
            </div>
          </div>
          <div className={styles.largeImage}>
            <div className={styles.imageCard2}>
              <img src="https://hitechnepal.com/images/shallow-focus-photo-of-people-discussing-3182826.jpg" alt="Our Expertise" />
              <div className={styles.overlay}>Our Expertise</div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className={styles.whoWeAre}>
        <div className={styles.contentWrapper}>

          <div className={styles.imageContainer}>
            <h1>About Us</h1>
            <h2>Who <span>We Are</span></h2>
            <img 
              src="https://hitechnepal.com/images/shallow-focus-photo-of-people-discussing-3182826.jpg" 
              alt="Team Collaboration" 
            />
            <p>
              We are proud to say that we have been a major player in the field of Information Technology for the last 22 years. Today we have emerged as a key player for
            </p>
          </div>

          {/* Right Text Section */}
          <div className={styles.textContainer}>
            <p>
              essential IT solution provider with a mission towards better risk management in a rapidly changing technological scenario.
            </p>
            <p>
              HiTech is committed to delivering quality products, services, and solutions that enrich businesses and lives around them. We have a team of dedicated IT professionals providing a solid foundation that can build world-class Desktop, Web, and Mobile applications as per the requirements of your business.
            </p>
            <p>The team is constantly learning, evolving, and redefining the standard of quality on a daily basis just</p>

            </div>
        <div className={styles.textContainer}>
            <p>
               to be capable of innovating and adopting into any level of complexity.
            </p>
            <p>
              HiTech Solutions & Services transforms the online presence of businesses and organizations efficiently, swiftly, and with minimum expenses.
            </p>
            <p>
              HiTech is one of the premier solution providers in India & Nepal. Our business interest varies into a wide range of services starting from Application Software, Customized Software Development, Website Design and Development, Web & Mobile Application development, and Hardware Sales & Networking Solutions.
            </p>
          
          </div>
        </div>
      </div>

      {/* New Section with 6 Images and Text */}
      <div className={styles.additionalContent}>
        <div className={styles.imageTextItem}>
          <img
            src="https://hitechnepal.com/images/icons/005-trophy.svg"
            alt="Image 1"
            className={styles.image}
          />
          <p>No.1 Business Solution </p>
        </div>
        <div className={styles.imageTextItem}>
          <img
            src="https://hitechnepal.com/images/icons/001-team.svg"
            alt="Image 2"
            className={styles.image}
          />
          <p>20+ Years of Experience</p>
        </div>
        <div className={styles.imageTextItem}>
          <img
            src="https://hitechnepal.com/images/icons/004-customer-review.svg"
            alt="Image 3"
            className={styles.image}
          />
          <p>5000+ Satisfied Clients</p>
        </div>
        <div className={styles.imageTextItem}>
          <img
            src="https://hitechnepal.com/images/icons/002-working-at-home.svg"
            alt="Image 4"
            className={styles.image}
          />
          <p>Widest Support Network</p>
        </div>
        <div className={styles.imageTextItem}>
          <img
            src="https://hitechnepal.com/images/icons/006-team.svg"
            alt="Image 5"
            className={styles.image}
          />
          <p>Team of Qualified and Skilled</p>
        </div>
        <div className={styles.imageTextItem}>
          <img
            src="https://hitechnepal.com/images/icons/006-team.svg"
            alt="Image 6"
            className={styles.image}
          />
          <p>Proper Office Management System</p>
        </div>
      </div>

      {/* Strength Section */}
      <div className={styles.strengthSection}>
        <div className={styles.strengthWrapper}>
          {/* Left Text Section */}
          <div className={styles.strengthText}>
            <h2>Our <span>Strength</span></h2>
            <ul>
              <li>Nepal’s No.1 Business Solution   Provider  Company</li>
              <li>More than 15 years Experience in IT Products Services</li>
              <li>Management is self involved in business and very good personal relation with all the banks and promoters of    Banks</li>
              <li>More than 1500 Satisfied Clients all over  Nepal</li>
              <li>Providing service to almost all Corporate Houses in Nepal</li>
              <li>Widest Support Network in Nepal, Offices in all Major Cities of Nepal.</li>
              <li>Scientifically designed workspace with full Support Services</li>
              <li>Team of Qualified and Skilled Software and Hardware Professionals</li>
              <li>Proper Office Management System to provide quality Products and Services</li>
              
            </ul>
          </div>

          {/* Right Image Section with Triangular Shape */}
          <div className={styles.strengthImageWrapper}>
            <img 
              src="https://hitechnepal.com/images/top-view-photo-of-people-having-a-meeting-3183165.jpg" 
              alt="Team Collaboration" 
              className={styles.strengthImage}
            />
          </div>
        </div>
      </div>

      {/* Goals & Objectives Section */}
      <div className={styles.goalsSection}>
        <div className={styles.goalshead}>
          <h1>Goals & </h1>
          <h2>Objectives</h2>
          <p>
            We deliver with integrity and commitment to IT services and solutions that enrich businesses and lives. 
            We aim to be at the heart of every business, providing complete IT solutions under one roof.
          </p>
        </div>
        
        <div className={styles.goalsImage}>
          <img src="https://hitechnepal.com/images/4005531.png" alt="Goals & Objectives" />
        </div>

        <div className={styles.goalsContent}>
          <div className={styles.rightcontent}> 
            <div className={styles.item}>
            <p>Empowering People, Creating smiles</p>
              <img
                src="https://hitechnepal.com/images/icons/001-empowering.svg"
                alt="Image 5"
                className={styles.icon}
              />

            </div>

            <div className={styles.item}>
            <p>Empowering People, Creating smiles</p>
              <img
                src="https://hitechnepal.com/images/icons/001-empowering.svg"
                alt="Image 5"
                className={styles.icon}
              />
              
            </div>

            <div className={styles.item}>
            <p>Empowering People, Creating smiles</p>
              <img
                src="https://hitechnepal.com/images/icons/001-empowering.svg"
                alt="Image 5"
                className={styles.icon}
              />
              
            </div>

            <div className={styles.item}>
            <p>Empowering People, Creating smiles</p>
              <img
                src="https://hitechnepal.com/images/icons/001-empowering.svg"
                alt="Image 5"
                className={styles.icon}
              />
              
            </div>
          </div>
          <div className={styles.leftcontent}> 
                <div className={styles.item}>
                  <img
                    src="https://hitechnepal.com/images/icons/004-trade-1.svg"
                    alt="Image 5"
                    className={styles.icon}
                  />
                  <p>Empowering People, Creating smiles</p>
                </div>
              
                <div className={styles.item}>
                  <img
                    src="https://hitechnepal.com/images/icons/004-trade-1.svg"
                    alt="Image 5"
                    className={styles.icon}
                  />
                  <p>Empowering People, Creating smiles</p>
                </div>
              
                <div className={styles.item}>
                  <img
                    src="https://hitechnepal.com/images/icons/004-trade-1.svg"
                    alt="Image 5"
                    className={styles.icon}
                  />
                  <p>Empowering People, Creating smiles</p>
                </div>
              

                <div className={styles.item}>
                  <img
                    src="https://hitechnepal.com/images/icons/004-trade-1.svg"
                    alt="Image 5"
                    className={styles.icon}
                  />
                  <p>Empowering People, Creating smiles</p>
                </div>
              

              <div className={styles.item}>
                  <img
                    src="https://hitechnepal.com/images/icons/004-trade-1.svg"
                    alt="Image 5"
                    className={styles.icon}
                  />
                  <p>Empowering People, Creating smiles</p>
                </div>
              
          </div>
        </div>
      </div>

      {/* Solution and services */}
      <div className={styles.servicesSection}>
        <div className={styles.servicesWrapper}>

           {/* left Image Section with  */}
           <div className={styles.servicesImageWrapper}>
            <img 
              src="https://hitechnepal.com/images/solutions-infographic.png" 
              alt="Team Collaboration" 
              className={styles.servicesImage}
            />
          </div>


          {/* right Text Section */}
          <div className={styles.servicesText}>
            <h2>Our <span>Solution</span> & <span>Services</span></h2>
            <ul>
              <li>Information Systems</li>
              <li>Client-Server Technologies</li>
              <li>System Analysis, Designing, Coding, Testing and Implementation</li>
              <li>Data Modeling and Visualization Techniques</li>
              <li>Internet-based Technologies</li>
              <li>Online and Offline Reporting</li>
              <li>System Integration and Testing</li>
              <li>Customized Software Development</li>
              <li>ERP Solution Development and Distribution</li>
              
            </ul>
          </div>

         
        </div>
      </div>

      <div className={supportStyles.backgroundContainer}>
      <div className={supportStyles.overlay}>
        <h1>Want to learn more about what <span className={supportStyles.wedo}>we do?</span></h1>
        <p>Send us a message or a query about any of our services.</p>
        <button className={supportStyles.getInTouchButton}>
          Get in Touch
          <span className={supportStyles.arrow}>&rarr;</span>
        </button>
      </div>
    </div>

      <Subscribe />
      <Footerlast />
    </div>
  );
};



export default About;
