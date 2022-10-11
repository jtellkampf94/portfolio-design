import WorkCard from "../../containers/WorkCard";
import "./index.scss";
import MovidAppImages from "../../assets/images/movid-all-screens.png";
import ChatbackAppImages from "../../assets/images/chatback-all-screens.png";
import BabblerAppImages from "../../assets/images/babbler-all-screens.png";
import TypescriptLogo from "../../assets/images/typescript-logo.png";
import JavascriptLogo from "../../assets/images/javascript-logo.png";
import CssLogo from "../../assets/images/css-logo.png";
import ScssLogo from "../../assets/images/scss-logo.png";
import ReactLogo from "../../assets/images/react-logo.png";
import ReduxLogo from "../../assets/images/redux-logo.png";
import NextjsLogo from "../../assets/images/nextjs-logo.png";
import MongodbLogo from "../../assets/images/mongodb-logo.png";
import PostgresqlLogo from "../../assets/images/postgresql-logo.png";
import RedisLogo from "../../assets/images/redis-logo.png";
import ApolloLogo from "../../assets/images/apollo-logo.png";
import Awsec2Logo from "../../assets/images/awsec2-logo.png";
import Awss3Logo from "../../assets/images/awss3-logo.png";
import GraphqlLogo from "../../assets/images/graphql-logo.png";
import NodejsLogo from "../../assets/images/nodejs-logo.png";
import StyledComponentsLogo from "../../assets/images/styledcomponents-logo.png";

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="work__heading">
        <h1>work</h1>
      </div>
      <div className="work__container">
        <div className="work__card">
          <div className="work__card-image-container">
            <img className="work__card-image" src={ChatbackAppImages} />
          </div>
          <div className="work__card-icon-container">
            <img
              className="work__card-icon"
              src={TypescriptLogo}
              alt="Typescript Logo"
            />
            <img
              className="work__card-icon"
              src={NextjsLogo}
              alt="Next.js Logo"
            />
            <img className="work__card-icon" src={ReactLogo} alt="React Logo" />
            <img
              className="work__card-icon"
              alt="Styled Components Logo"
              src={StyledComponentsLogo}
            />
            <img
              className="work__card-icon"
              src={GraphqlLogo}
              alt="React Logo"
            />
            <img
              className="work__card-icon"
              src={ApolloLogo}
              alt="Apollo Logo"
            />
            <img
              className="work__card-icon"
              src={NodejsLogo}
              alt="Nodejs Logo"
            />
            <img
              className="work__card-icon"
              src={PostgresqlLogo}
              alt="Postgresql Logo"
            />
            <img className="work__card-icon" src={RedisLogo} alt="Redis Logo" />
            <img
              className="work__card-icon"
              src={Awsec2Logo}
              alt="Awsec2 Logo"
            />
            <img className="work__card-icon" src={Awss3Logo} alt="Awss3 Logo" />
          </div>
          <div className="work__card-header">
            <h3>ChatBack</h3>
            <h4>Creator and Software developer</h4>
          </div>
          <div className="work__card-description">
            <h4>Description</h4>
            <ul>
              <li>
                ChatBack is a real time messaging app enabled using websockets
                from GraphQL subscriptions
              </li>
              <li>
                Users can send text and / or images to other users one-on-one or
                in groups.
              </li>
              <li>
                Users can search for other users to add as contacts, to message
                or to include in a group to message.
              </li>
              <li>
                Users are required to register or login to use app, which uses
                session based authentication
              </li>
              <li>
                The frontend uses React to create The UI and is styled using the
                css in js library Styled Components. It is rendered server-side
                with the use of the Next.js framework
              </li>
              <li>
                The backend is a Node.js server implementing a GraphQL API with
                the use of Apollo server
              </li>
              <li>
                Apollo Client is used on the frontend to fetch data from the
                GraphQL API and for state management
              </li>
              <li>
                The app is entirely written in TypeScript so uses TypeGraphQL
                and TypeORM libraries on the back end to integrate TypeScript
                better with GraphQL and the models in the database.
              </li>
              <li>
                The app uses a PostgreSQL database to store user and message
                data and uses Redis to store sessions
              </li>
              <li>
                The app uses an AWS S3 Bucket for image storage. A presigned URL
                is required to send image to S3 bucket ensuring an extra layer
                of security
              </li>
              <li>
                Docker and Docker Compose is used for deployment. The app is
                deployed on an AWS EC2 Instance.
              </li>
            </ul>
          </div>
          <div className="work__card-button-container">
            <a href="https://github.com/jtellkampf94/ChatBack" target="_blank">
              <button>Code</button>
            </a>
            <a href="http://44.208.163.53/" target="_blank">
              <button>Website</button>
            </a>
          </div>
        </div>

        <div className="work__card">
          <div className="work__description">
            <h3>Movid</h3>
            <img src={MovidAppImages} />

            <h4>Description</h4>
            <p>
              The Movid web app shows users information of any movie or TV show
              on the movie database API, including the plot, cast and crew,
              release date, critics reviews, average rating and many more. It
              allows users to create an account, rate movies or tv shows, create
              watchlists and advanced search for titles.
            </p>

            <h4>Technologies Used</h4>
            <ul>
              <li>React (CRA TypeScript) for the The UI</li>
              <li>Redux and Redux-Thunk for state management</li>
              <li>SCSS for responsive styles</li>
              <li>The Movie Database API as data source</li>
            </ul>
          </div>
        </div>

        <div className="work__card">
          <div className="work__image"></div>
          <div className="work__description">
            <h3>Babbler</h3>
            <img src={BabblerAppImages} />

            <h4>Description</h4>
            <p>
              Babbler web app allows users to create posts, follow other users,
              comment on posts and like posts. It features login / registration
              functionality, picture posting, and user searching.
            </p>

            <h4>Technologies Used</h4>
            <ul>
              <li>React (CRA JavaScript) for the The UI</li>
              <li>Redux and Redux-Saga for state management</li>
              <li>SCSS for responsive styles</li>
              <li>
                NodeJS for the Server (Rest API implemented with ExpressJS)
              </li>
              <li>MongoDB database</li>
              <li>Mongoose for the database ORM</li>
              <li>AWS S3 for image storage</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
