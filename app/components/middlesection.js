import styles from '../styles/Middlesection.module.scss';
import supportStyles from '../styles/Supportsection.module.scss';

const MiddleSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          {/* Background Images */}
          <div className={styles.backgroundImage1}>
            <img
              src="https://hitechnepal.com/images/pexels-fauxels-3184434.jpg"
              alt="Background Image 1"
              className={`${styles.image} ${styles.image1}`}
            />
          </div>
          <div className={styles.backgroundImage2}>
            <img
              src="https://hitechnepal.com/images/laptop.png"
              alt="Background Image 2"
              className={`${styles.image} ${styles.image2}`}
            />
          </div>

          {/* Floating Cards */}
          <a
            href="https://hitechnepal.com/images/icons/001-strength.svg"
            className={`${styles.floatingCard} ${styles.strengthCard}`}
          >
            <img
              src="https://hitechnepal.com/images/headway-5QgIuuBxKwM-unsplash.jpg"
              alt="Strength Icon"
              className={styles.icon}
            />
            <h3>OUR STRENGTH</h3>
          </a>

          <a
            href="https://hitechnepal.com/images/icons/002-flag.svg"
            className={`${styles.floatingCard} ${styles.goalsCard}`}
          >
            <img
              src="https://hitechnepal.com/images/proxyclick-visitor-management-system-wsHvGRpT8Eo-unsplash.jpg"
              alt="Goals Icon"
              className={styles.icon}
            />
            <h3>OUR GOALS</h3>
          </a>
          <a
            href="https://hitechnepal.com/images/icons/003-skills.svg"
            className={`${styles.floatingCard} ${styles.expertiseCard}`}
          >
            <img
              src="https://hitechnepal.com/images/shallow-focus-photo-of-people-discussing-3182826.jpg"
              alt="Expertise Icon"
              className={styles.icon}
            />
            <h3>OUR EXPERTISE</h3>
          </a>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.header}>
            <span className={styles.tagline}>We Are</span>
            <h1>HiTech Solutions & Services Pvt. Ltd.</h1>
          </div>
          <p>
            We are a premier business software solution provider in Nepal with
            its corporate office located in Kalimati, Kathmandu (Nepal).
          </p>
          <p>
            Promoted by professionals with more than a decade of experience in
            accounting, management, and information technology, the company
            specializes in supplying application software as well as
            client-specific customized solutions. We offer our expertise to
            better solve business issues and digitalize your operation.
          </p>
          <button className={styles.readMoreButton}>Read More</button>
        </div>
      </div>

      {/* New Section with 5 Images and Text */}
      <div className={styles.additionalContent}>
        <div className={styles.imageTextItem}>
          <img
            src="https://hitechnepal.com/images/icons/005-trophy.svg"
            alt="Image 1"
            className={styles.image}
          />
          <p>No.1 Business Solution Provider of Nepal</p>
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
          <p>5000+ Clients</p>
        </div>
        <div className={styles.imageTextItem}>
          <img
            src="https://hitechnepal.com/images/icons/002-working-at-home.svg"
            alt="Image 4"
            className={styles.image}
          />
          <p>20+ Partners</p>
        </div>
        <div className={styles.imageTextItem}>
          <img
            src="https://hitechnepal.com/images/icons/006-team.svg"
            alt="Image 5"
            className={styles.image}
          />
          <p>100+ Dynamic Team Members</p>
        </div>
      </div>

      {/* Support Service Section */}
      <div className={styles.supportServiceSection}>
        <div className={styles.supportServiceContainer}>
          <h2>Support Service</h2>
          <p>
            At HiTech, we believe in the intrinsic value of human resources. We
            have made significant investments in physical and technological
            infrastructure and telecommunication to ensure adequate ability to
            support and enhance our rapidly growing business. HiTech is Nepal’s
            No. 1 Business Solution Provider Company only due to our dynamic
            Partners and Team across Nepal.
          </p>
          <p>
            Our team is ready to offer professional support and solutions to
            ease your operation.
          </p>
        </div>
      </div>

      {/* Additional Support Section */}
      <div className={supportStyles.supportSection}>
        
        <div className={supportStyles.servicesContainer}>
          <div className={supportStyles.serviceItem}
          style={{ marginTop: "110px"}}
          >
            <div
              className={supportStyles.iconWrapper}
              style={{ borderColor: "#FF6B6B" }}
            >
              <img
                src="https://hitechnepal.com/images/icons/live-chat-support-new.svg"
                alt="Live Chat Support"
                className={supportStyles.icon}
              />
            </div>
            <h3>Live Chat Support</h3>
          </div>
          <div className={supportStyles.serviceItem}
          style={{ marginTop: "50px"}}>
            <div
              className={supportStyles.iconWrapper}
              style={{ borderColor: "#8C52FF" }}
            >
              <img
                src="https://hitechnepal.com/images/icons/onsite-support.svg"
                alt="Onsite Support"
                className={supportStyles.icon}
              />
            </div>
            <h3>Onsite Support</h3>
          </div>
          <div className={supportStyles.serviceItem}
          style={{ marginTop: "-10px"}}>
            <div
              className={supportStyles.iconWrapper}
              style={{ borderColor: "#5EC9DB" }}
            >
              <img
                src="https://hitechnepal.com/images/icons/crm.svg"
                alt="Industry-specific Implementations"
                className={supportStyles.icon}
              />
            </div>
            <h3>Industry-specific Implementations</h3>
          </div>
          <div className={supportStyles.serviceItem}
          style={{ marginTop: "-60px"}}>
            <div
              className={supportStyles.iconWrapper}
              style={{ borderColor: "#A044FA" }}
            >
              <img
                src="https://hitechnepal.com/images/icons/software-training.svg"
                alt="Software Training"
                className={supportStyles.icon}
              />
            </div>
            <h3>Software Training</h3>
          </div>
        </div>
        <button className={supportStyles.learnMoreButton}>
          Learn more about us
        </button>
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
    </section>
  );
};

export default MiddleSection;
