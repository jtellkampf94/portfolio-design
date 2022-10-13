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
import GraphqlLogo from "../../assets/images/graphql-logo.png";
import NodejsLogo from "../../assets/images/nodejs-logo.png";
import StyledComponentsLogo from "../../assets/images/styledcomponents-logo.png";
import ExpressJSLogo from "../../assets/images/express-logo.png";

import "./index.scss";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__heading">
        <h1>skills</h1>
      </div>
      <div className="skills__container">
        <div className="skills__list-container glassomorphic">
          <div className="skills__list-header">
            <h4>Languages / Programming Languages</h4>
          </div>
          <ul className="skills__list">
            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Javascript Logo"
                  src={JavascriptLogo}
                />
                <div className="skills__list-item-content">JavaScript</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Typescript Logo"
                  src={TypescriptLogo}
                />
                <div className="skills__list-item-content">Typescript</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="HTML Logo"
                  src={HtmlLogo}
                />
                <div className="skills__list-item-content">HTML</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="CSS Logo"
                  src={CssLogo}
                />
                <div className="skills__list-item-content">CSS</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="SCSS Logo"
                  src={ScssLogo}
                />
                <div className="skills__list-item-content">SCSS</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="GraphQL Logo"
                  src={GraphqlLogo}
                />
                <div className="skills__list-item-content">GraphQL</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Bash Logo"
                  src={BashLogo}
                />
                <div className="skills__list-item-content">Bash</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="skills__list-container glassomorphic">
          <div className="skills__list-header">
            <h4>Technologies, Libraries and Frameworks</h4>
          </div>
          <ul className="skills__list">
            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="React Logo"
                  src={ReactLogo}
                />
                <div className="skills__list-item-content">React</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Redux Logo"
                  src={ReduxLogo}
                />
                <div className="skills__list-item-content">Redux</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Apollo Logo"
                  src={ApolloLogo}
                />
                <div className="skills__list-item-content">
                  Apollo client and server
                </div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Next.js Logo"
                  src={NextjsLogo}
                />
                <div className="skills__list-item-content">Next.js</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Mongo DB Logo"
                  src={MongodbLogo}
                />
                <div className="skills__list-item-content">Mongo DB</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Postgresql Logo"
                  src={PostgresqlLogo}
                />
                <div className="skills__list-item-content">PostgreSQL</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Redis Logo"
                  src={RedisLogo}
                />
                <div className="skills__list-item-content">Redis</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Nodejs Logo"
                  src={NodejsLogo}
                />
                <div className="skills__list-item-content">Nodejs</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Styled Components Logo"
                  src={StyledComponentsLogo}
                />
                <div className="skills__list-item-content">
                  Styled Components
                </div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Express.js Logo"
                  src={ExpressJSLogo}
                />
                <div className="skills__list-item-content">Express.js</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="skills__list-container glassomorphic">
          <div className="skills__list-header">
            <h4>Tools</h4>
          </div>
          <ul className="skills__list">
            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Docker Logo"
                  src={DockerLogo}
                />
                <div className="skills__list-item-content">Docker</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="VS Code Logo"
                  src={VscodeLogo}
                />
                <div className="skills__list-item-content">VS Code</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="Git Logo"
                  src={GitLogo}
                />
                <div className="skills__list-item-content">Git</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="GitHub Logo"
                  src={GithubLogo}
                />
                <div className="skills__list-item-content">GitHub</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="AS S3 Logo"
                  src={Awss3Logo}
                />
                <div className="skills__list-item-content">AWS S3</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  alt="AWS EC2 Logo"
                  src={Awsec2Logo}
                />
                <div className="skills__list-item-content">AWS EC2</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  src={ChromedevtoolsLogo}
                  alt="Chrome Devtools Logo"
                />
                <div className="skills__list-item-content">Chrome Devtools</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
