"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar"; 
import Footerlast from '../components/footerlast';
import styles from "../styles/career.module.scss"

const jobData = [
    {
      id: 1,
      position: "Team Leader .NET C# Project",
      placement: "2",
      type: "Full Time",
      title: "Team Leader .NET C# Project",
      responsibilities: [
        "Expert level knowledge in .NET C# , Web Services, SQL Server T-SQL programming language(large stored procedures, triggers and complex joins)",
        "Analyze currently running system and modify according to new requirement",
        "Lead development team of at least 10 programmers",
        "Write optimized codes using advanced OOPS concept",
        "Interested in R &D to find out tricks and tips, new technologies and share among the team members",
        "Should provide training to junior programmers in .Net Technologies",
        "Efficient in debugging and deployment",

      ],
      requirements: [
        "At least bachelor degree in related field",
        "Extensive knowledge of OOP paradigm",
        "Minimum two(2) years of working experience as Team Leader with team consisting of at least 10 programmers",
        "Knowledge in .NET framework 4.0",
        "Prior working experience in large database and database optimization is plus",
        "Good communication skill",
        "Good command in writing and speaking English",
        "Knowledge in banking functionalities is added advantage",
        "Candidate not having experience as per mentioned in the announcement are not requested to apply for the post",
      ],
    },
    {
      id: 2,
      position: "Senior .NET C# Engineer",
      placement: "4",
      type: "Full Time",
      title: "Senior .NET C# Engineer",
      responsibilities: [
        "Develop user-friendly web interfaces.",
        "Collaborate with designers and backend developers.",
        "Optimize applications for maximum speed.",
      ],
      requirements: [
        "Proven experience in React and JavaScript.",
        "Good understanding of CSS and HTML.",
        "Strong debugging and problem-solving skills.",
      ],
    },
    {
      id: 3,
      position: "System Support Officer",
      placement: "4",
      type: "Full Time",
      title: "System Support Officer",
      responsibilities: [
        "Design intuitive and engaging user interfaces.",
        "Conduct user research and usability testing.",
        "Collaborate with the development team.",
      ],
      requirements: [
        "Proficiency in design tools like Figma or Adobe XD.",
        "Strong portfolio showcasing UX/UI design.",
        "Good understanding of user-centered design principles.",
      ],
    },
    {
      id: 4,
      position: "Technical Writer",
      placement: "1",
      type: "Full Time",
      title: "Technical Writer",
      responsibilities: [
        "Develop and maintain server-side logic.",
        "Collaborate with frontend developers to integrate systems.",
        "Optimize applications for performance.",
      ],
      requirements: [
        "Strong experience in Node.js and databases.",
        "Good knowledge of APIs and authentication.",
        "Problem-solving and debugging skills.",
      ],
    },
  ];
export default function CareerPage() {
    const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Navbar />

      <div className={styles.careerpage}>
        <div className={styles.imagesection}></div>
        <div className={styles.text}>
          <h1>Career</h1>
          <h2>Home <span> / Career</span></h2>
        </div>
      </div>
      <div className={styles.content}>
      <div className={styles.header}>
        <h1>Seeking a Career?</h1>
      </div>
        <h2 className={styles.joinTeam}>Join Our Team</h2>
        <p className={styles.description}>
        We are always looking for dedicated and talented individuals with whom we can work with and build relations. If you are looking for a challenging career, this is the place you should enroll. We work on National & international projects with cutting edge technologies to develop quality solutions.
        </p>

        <h2 className={styles.benefitsHeader}>Benefits :</h2>
        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <img src="https://hitechnepal.com/images/icons/004-payment-day.svg" alt="Growth" />
            <p>Industry Standard Salary and leave</p>
          </div>
          <div className={styles.benefit}>
            <img src="https://hitechnepal.com/images/icons/003-teaching.svg" alt="Teamwork" />
            <p>Professional Training</p>
          </div>
          <div className={styles.benefit}>
            <img src="https://hitechnepal.com/images/icons/002-fundraiser.svg" alt="Support" />
            <p>Provident Fund</p>
          </div>
          <div className={styles.benefit}>
            <img src="https://hitechnepal.com/images/icons/001-health-insurance.svg" alt="Recognition" />
            <p>Accidental and Medical Insurance</p>
          </div>
        </div>

        <p className={styles.footerText}>
          If you think you are the person we are looking for, then send us your CV at{" "}
          <a href="mailto:career@hitechnepal.com.np" className={styles.email}>
            career@hitechnepal.com.np
          </a>
        </p>
        
      </div>


      <div className={styles.job}>
        <h1 className={styles.headtext}>Current Job Vacancies</h1>
      <div className={`${styles.jobsSection} ${selectedJob ? styles.withSelection : styles.noSelection}`}>
      
  {/* Job Cards Section */}
  <div className={styles.cardsContainer}>
    {jobData.map((job) => (
      <div
        key={job.id}
        className={`${styles.card} ${selectedJob?.id === job.id ? styles.activeCard : ""}`}
        onClick={() => setSelectedJob(job)}
      >
        <h1>Position</h1>
        <h3>{job.position}</h3>
        <div className={styles.cardDetails}>
          <p><strong>Placement:</strong> {job.placement}</p>
          <p><strong>Type:</strong> {job.type}</p>
        </div>
      </div>
    ))}
  </div>

  

  <div className={styles.jobDetails}>
   
    {/* Table View (Shown When No Job is Selected) */}
    {!selectedJob && (
      <table className={styles.jobTable}>
        <thead>
          <tr>
            <th>Position</th>
            <th>Placement</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
        {jobData.map((job) => (
          
            <tr key={job.id} onClick={() => setSelectedJob(job)} className={styles.jobRow}>
              <td className={styles.tdposition}>{job.position}</td>
              <td>{job.placement}</td>
              <td>{job.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}

    {/* Detailed View (Only Shown When a Job is Selected) */}
    {selectedJob && (
      <>
        <h3>RESPONSIBILITIES</h3>
        <ul>
          {selectedJob.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>REQUIREMENTS</h3>
        <ul>
          {selectedJob.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    )}
  </div>
</div>



</div>


<Footerlast/>

      
    </>
  );
}
