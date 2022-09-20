import "./index.scss";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__heading">
        <h1>skills</h1>
      </div>
      <div className="skills__container">
        <div className="skills__card glassomorphic">
          <h4>Front End</h4>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Apollo Client</li>
            <li>NextJS</li>
          </ul>
        </div>

        <div className="skills__card glassomorphic">
          <h4>Back End</h4>

          <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>Apollo Server</li>
            <li>AWS S3</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Redux</li>
          </ul>
        </div>

        <div className="skills__card glassomorphic">
          <h4>Other</h4>

          <ul>
            <li>GIT</li>
            <li>Docker</li>
            <li>Docker-Compose</li>
            <li>Linux</li>
            <li>CMD / Powershell</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
