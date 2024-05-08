import React from "react";
import { Container, Col } from "react-bootstrap";
import CompanyBlockLeft from "./CompanyBlockLeft";
import CompanyBlockRight from "./CompanyBlockRight";
import lanterneImg from "../../assets/logo/lanterne.png";
import hardisImg from "../../assets/logo/hardis-group.png";
import cciImg from "../../assets/logo/cci.png";
import areaImg from "../../assets/logo/area.png";
import portfolioImg from "../../assets/logo/portfolio.png";
import "./Experiences.css";

const Experiences = () => {
  return (
    <section>
      <Container fluid className="exp-section" id="exp">
        <Container className="exp-content">
          <Col md={12} className="exp-header">
            <h1>Experiences</h1>
          </Col>
          <CompanyBlockLeft
            title="Full Stack Developer - Personal project"
            subtitle="Portfolio"
            description={[
              "Design and develop a modern web application",
              "Created a feature-rich web application from scratch using cutting-edge technologies",
              "Developed a responsive web application with a modern user interface",
              "Designed a user-friendly and intuitive interface for a positive user experience. Ensured code maintainability, scalability, and optimal performance throughout the development process. Regularly conducted testing and debugging to ensure the application's reliability.",
              "Deployed the web application to a cloud hosting platform for accessibility.",
              "Front-End: ReactJS / React Bootstrap",
              "Back-End: Node JS",
              "Setup: GitHub"
            ]}
            imgSrc={portfolioImg}
          />
          <CompanyBlockRight
            title="Mobile Developer - End of studies project"
            subtitle="Lanterne | September 2022 - Now"
            description={[
              "Create an application with an interactive map with a report button, emergency contacts and editable route filters",
              "Mock-up of mobile project with Figma",
              "iOS/Android mobile application development with Flutter",
              "Front-End: Flutter / ReactJS",
              "Back-End: Node.js",
              "Setup: GitHub / Sonarqube / Jenkins / Docker",
              "Database: Firebase / Firestore"
            ]}
            imgSrc={lanterneImg}
          />
          <CompanyBlockLeft
            title="Invoicing Data Analyst - Internship"
            subtitle="Hardis Group | April - July 2023"
            description={[
              "Research and documentation on electronic invoicing standards, mainly on the Factur-X format",
              "Acquired the Python tools needed to generate and validate invoices compliant with the Factur-X format, and to extract invoice data",
              "Creation of a Python tool to store data extracted from invoices in a MySQL database",
              "Analysis of extracted data using Power BI, with the creation of interactive dashboards, reports and visualizations for data analysis",
              "Creation of Talend workflows for e-invoice generation, validation, data extraction and insertion into a MySQL database"
            ]}
            imgSrc={hardisImg}
          />
          <CompanyBlockRight
            title="AREA - School project"
            subtitle="Epitech | January - February 2023"
            description={[
              "Create an application able to create action / reaction using external APIs",
              "Android mobile application development with React Native",
              "Developed user management modules facilitating registration and authentication processes, incorporating options for username/password authentication and OAuth2 integration",
              "Front-End: React Native / TypeScript",
              "Back-End: Python Flask",
              "Setup: Docker / Docker compose / GitHub",
              "Database: MongoDB / SQL"
            ]}
            imgSrc={areaImg}
          />
          <CompanyBlockLeft
            title="Project Manager - Internship"
            subtitle="CCI Grand Est | September - December 2021"
            description={[
              "Evaluated current corporate tools for optimal integration into the final solution",
              "Conducted market survey of e-signature service providers to create action plan for standardizing solution use in CCIs of Grand Est region",
              "Contacted multiple electronic signature providers",
              "Conducted tailored tests using providers' trial accounts to analyze alignment with IT Department and CCI user needs.",
              "Developed decision matrix with weighted criteria; identified 'Adobe Sign' as top solution.",
              "Presented and gained approval for selection of 'Adobe Sign' based on functionality, Microsoft 365 integration, and user-friendliness.",
              "Collaborated with 'Twelve Consulting' to develop tool through Microsoft Power Platform.",
              "Established connection between application, SharePoint, and Adobe Sign using Power Automate for streamlined processes across modules."
            ]}
            imgSrc={cciImg}
          />
        </Container>
      </Container>
    </section>
  );
}

export default Experiences;
