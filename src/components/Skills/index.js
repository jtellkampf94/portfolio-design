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
                <img className="skills__list-item-image" src={JavascriptLogo} />
                <div className="skills__list-item-content">JavaScript</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={TypescriptLogo} />
                <div className="skills__list-item-content">Typescript</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={HtmlLogo} />
                <div className="skills__list-item-content">HTML</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={CssLogo} />
                <div className="skills__list-item-content">CSS</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={ScssLogo} />
                <div className="skills__list-item-content">SCSS</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={BashLogo} />
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
                <img className="skills__list-item-image" src={ReactLogo} />
                <div className="skills__list-item-content">React</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={ReduxLogo} />
                <div className="skills__list-item-content">Redux</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={ApolloLogo} />
                <div className="skills__list-item-content">
                  Apollo client and server
                </div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={NextjsLogo} />
                <div className="skills__list-item-content">Next.js</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={MongodbLogo} />
                <div className="skills__list-item-content">Mongo DB</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={PostgresqlLogo} />
                <div className="skills__list-item-content">PostgreSQL</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={RedisLogo} />
                <div className="skills__list-item-content">Redis</div>
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
                <img className="skills__list-item-image" src={DockerLogo} />
                <div className="skills__list-item-content">Docker</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={VscodeLogo} />
                <div className="skills__list-item-content">VS Code</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={GitLogo} />
                <div className="skills__list-item-content">Git</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={GithubLogo} />
                <div className="skills__list-item-content">GitHub</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={Awss3Logo} />
                <div className="skills__list-item-content">AWS S3</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img className="skills__list-item-image" src={Awsec2Logo} />
                <div className="skills__list-item-content">AWS EC2</div>
              </div>
            </li>

            <li className="skills__list-item">
              <div className="skills__list-item-container">
                <img
                  className="skills__list-item-image"
                  src={ChromedevtoolsLogo}
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
