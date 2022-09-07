import "./index.scss";

const Work = () => {
  return (
    <section className="work" id="work">
      <h1>work</h1>
      <div className="work__card">
        <div className="work__image"></div>
        <div className="work__description">
          <h3>ChatBack</h3>

          <h4>Description</h4>
          <p>
            ChatBack is a real time messaging app where users can send text and
            / or images to other users one-on-one or in groups. Users are
            required to create an account to use the app and can search for and
            add other users as contacts. Users can also edit their account.
          </p>

          <h4>Technologies Used</h4>
          <ul>
            <li>React (NextJS Typescript) for the The UI</li>
            <li>
              Apollo Client for data fetching and state management on the
              frontend
            </li>
            <li>SCSS used for styles</li>
            <li>
              NodeJS for the Server (GraphQL API implemented with Apollo Server)
            </li>
            <li>PostgreSQL database to store user and message data</li>
            <li>TypeORM for the database ORM</li>
            <li>AWS S3 for image storage</li>
            <li>Redis for session storage</li>
            <li>Docker and Docker Compose for deployment</li>
          </ul>
        </div>
      </div>

      <div className="work__card">
        <div className="work__image"></div>
        <div className="work__description">
          <h3>Movid</h3>

          <h4>Description</h4>
          <p>
            The Movid web app shows users information of any movie or TV show on
            the movie database API, including the plot, cast and crew, release
            date, critics reviews, average rating and many more. It allows users
            to create an account, rate movies or tv shows, create watchlists and
            advanced search for titles.
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
            <li>NodeJS for the Server (Rest API implemented with ExpressJS)</li>
            <li>MongoDB database</li>
            <li>Mongoose for the database ORM</li>
            <li>AWS S3 for image storage</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
