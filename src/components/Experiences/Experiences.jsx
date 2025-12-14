import React from "react";
import { Container, Col } from "react-bootstrap";
import CompanyBlockLeft from "./CompanyBlockLeft";
import CompanyBlockRight from "./CompanyBlockRight";
import lanterneImg from "../../assets/logo/lanterne.png";
import hardisImg from "../../assets/logo/hardis-group.png";
import cciImg from "../../assets/logo/cci.png";
import areaImg from "../../assets/logo/area.png";
import portfolioImg from "../../assets/logo/portfolio.png";
import passInterimImg from "../../assets/logo/pass-interim.png";
import "./Experiences.css";

const Experiences = () => {
  return (
    <section>
      <Container fluid className="exp-section" id="exp">
        <Container className="exp-content">
          <Col md={12} className="exp-header">
            <h1>Experiences</h1>
          </Col>
          <CompanyBlockRight
            key={1}
            title="Full-Stack Developer - 09/2024 - current"
            subtitle="Pass interim | Dublin, Ireland (Remote)"
            description={[
              "Advanced mastery in full-stack development with Laravel and Angular, creating new features",
              "Designed sustainable, scalable software architecture for long-term efficiency",
              "Integrated AI via OpenAI API to optimize data processing and agency-candidate matching",
              "Developed tools for PDF conversion, document tagging, and automated CV generation",
              "Led project management efforts, including task estimation, team coordination, and dashboard redesign for sales teams.",
              "Front-End: Angular",
              "Back-End: PHP Laravel",
              "Setup: GitLab / Deployer / php insights",
              "Database: MariaDB / MySQL / phpMyAdmin"
            ]}
            imgSrc={passInterimImg}
          />
          <CompanyBlockLeft
            key={2}
            title="Full-Stack Developer - 05/2024 - Current"
            subtitle="Freelance | Dublin, Ireland (Remote)"
            description={[
              "Developed responsive portfolios web app with a modern UI",
              "Focused on intuitive user experience and optimized for SEO to improve visibility",
              "Built using React, Next.js and TailwindCSS for efficient page loading, routing, and styling",
              "The websites were deployed on the cloud for easy accessibility with a robust backend in Node.js and Java to handle data processing and server operations",
              "Front-End: React.js / Next.js / TailwindCSS / React Bootstrap",
              "Back-End: Node.js / Java",
              "Setup: GitHub / GitHub Actions",
            ]}
            imgSrc={portfolioImg}
            link="https://github.com/paulo-epi/portfolio-react"
          />
          <CompanyBlockRight
            key={3}
            title="Full-Stack / Mobile Developer - 09/2022 - 02/2025"
            subtitle="Lanterne | Dublin, Ireland (Remote)"
            description={[
              "Create an application with an interactive map with a report button, emergency contacts and editable route filters",
              "Designed mobile mock-up using Figma",
              "Developed the mobile app with Flutter and the web version with React",
              "Backend powered by Node.js and Firebase, with GitHub and Docker for setup and deployment",
              "Front-End: Flutter / React.js",
              "Back-End: Node.js",
              "Setup: GitHub / Sonarqube / Jenkins / Docker",
              "Database: Firebase / Firestore"
            ]}
            imgSrc={lanterneImg}
          />
          <CompanyBlockLeft
            key={4}
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
            key={5}
            title="Full-Stack / Mobile Developer - School project"
            subtitle="Epitech | January - February 2023"
            description={[
              "Create an application able to create action / reaction using external APIs",
              "Android mobile application development with React Native",
              "Website development with TypeScript",
              "Developed user management modules facilitating registration and authentication processes, incorporating options for username/password authentication and OAuth2 integration",
              "Front-End: React Native / TypeScript",
              "Back-End: Python Flask",
              "Setup: Docker / Docker compose / GitHub",
              "Database: MongoDB / SQL",
              "Tests: Cypress"
            ]}
            imgSrc={areaImg}
            link="https://github.com/paulo-epi/Area-Epitech"
          />
          <CompanyBlockLeft
            key={6}
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
