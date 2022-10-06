import DockerLogo from "../../assets/images/docker-logo.png";
import TypescriptLogo from "../../assets/images/typescript-logo.png";
import JavascriptLogo from "../../assets/images/javascript-logo.png";
import HtmlLogo from "../../assets/images/html-logo.png";
import CssLogo from "../../assets/images/css-logo.png";
import ScssLogo from "../../assets/images/scss-logo.png";
import BashLogo from "../../assets/images/bash-logo.png";
import ReactLogo from "../../assets/images/react-logo.png";
import ReduxLogo from "../../assets/images/redux-logo.png";
import NextjsLogo from "../../assets/images/nextjs-logo.png";
import MongodbLogo from "../../assets/images/mongodb-logo.png";
import PostgresqlLogo from "../../assets/images/postgresql-logo.png";
import RedisLogo from "../../assets/images/redis-logo.png";
import ApolloLogo from "../../assets/images/apollo-logo.png";
import VscodeLogo from "../../assets/images/vscode-logo.png";
import GitLogo from "../../assets/images/git-logo.png";
import GithubLogo from "../../assets/images/github-logo.png";
import ChromedevtoolsLogo from "../../assets/images/chromedevtools-logo.png";
import Awsec2Logo from "../../assets/images/awsec2-logo.png";
import Awss3Logo from "../../assets/images/awss3-logo.png";
import AwsiamLogo from "../../assets/images/awsiam-logo.svg";

import "./index.scss";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__heading">
        <h1>skills</h1>
      </div>
      <div className="skills__container">
        {/* <div className="skills__card glassomorphic">
          <h4>Languages / Programming Languages</h4>
          <br />

          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>SQL</li>
            <li>Bash</li>
          </ul>
        </div>

        <div className="skills__card glassomorphic">
          <h4>Technologies, Libraries and Frameworks</h4>
          <br />

          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Redis</li>
            <li>Apollo Client and Server</li>
            <li>Express JS</li>
            <li>Mongoose</li>
            <li>TypeORM</li>
            <li>AWS SDK</li>
          </ul>
        </div>

        <div className="skills__card glassomorphic">
          <h4>Tools</h4>
          <br />

          <ul>
            <li>VS Code</li>
            <li>Git and GitHub</li>
            <li>Chrome DevTools</li>
            <li>Docker and Docker Compose</li>
            <li>AWS EC2, IAM and S3</li>
          </ul>
        </div> */}
        <div className="skills__card glassomorphic">
          <img src={JavascriptLogo} width={60} />
          <img src={TypescriptLogo} width={60} />
          <img src={HtmlLogo} width={60} />
          <img src={CssLogo} width={60} />
          <img src={ScssLogo} width={60} />
          <img src={BashLogo} width={60} />
        </div>
        <div className="skills__card glassomorphic">
          <img src={ReactLogo} width={60} />
          <img src={ReduxLogo} width={60} />
          <img src={NextjsLogo} width={60} />
          <img src={MongodbLogo} width={60} />
          <img src={PostgresqlLogo} width={60} />
          <img src={RedisLogo} width={60} />
          <img src={ApolloLogo} width={60} />
        </div>
        <div className="skills__card glassomorphic">
          <img src={DockerLogo} width={60} />
          <img src={VscodeLogo} width={60} />
          <img src={GitLogo} width={60} />
          <img src={GithubLogo} width={60} />
          <img src={Awsec2Logo} width={60} />
          <img src={Awss3Logo} width={60} />
          <img src={AwsiamLogo} width={60} />
          <img src={ChromedevtoolsLogo} width={60} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
