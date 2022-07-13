import "./index.scss";

const Work = () => {
  return (
    <section className="work" id="work">
      <h1>work</h1>

      <div className="work__card">
        <div className="work__image"></div>
        <div className="work__description">
          <h3>Movid</h3>

          <h4>Description</h4>
          <p>
            The Movid web app shows users information of any movie or TV show on
            the movie database. Information including the plot, cast and crew,
            release date, critics reviews, average rating and many more. It
            allows users to create an account, rate movies or tv shows, create
            watchlists and advanced search for titles.
          </p>

          <h4>Technologies Used</h4>
          <ul>
            <li>React (CRA TypeScript) for the The UI</li>
            <li>Redux and Redux-Thunk for state management</li>
            <li>SCSS for responsive styles</li>
            <li>The Movie Database API for external data source</li>
          </ul>
        </div>
      </div>

      <div className="work__card">
        <div className="work__image"></div>
        <div className="work__description">
          <h3>Messenger App</h3>

          <h4>Description</h4>
          <p>
            The Messenger app enables users to real time message other users as
            well as the ability to create and participate in multiple group
            chats. It also features login / registration functionality, picture
            messaging, user searching and contact saving functionality.
          </p>

          <h4>Technologies Used</h4>
          <ul>
            <li>React (NextJS Typescript) for the The UI</li>
            <li>Apollo Client for data fetching and state management</li>
            <li>SCSS for responsive styles</li>
            <li>NodeJS for the Server</li>
            <li>GraphQL API implemented with Apollo Server</li>
            <li>PostgreSQL for the Database</li>
            <li>Typeorm for the database ORM</li>
            <li>AWS S3 for image storage</li>
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
            <li>Redux and Redux-Thunk for state management</li>
            <li>SCSS for responsive styles</li>
            <li>NodeJS for the Server</li>
            <li>Rest API implemented with ExpressJS</li>
            <li>MongoDB for the Database</li>
            <li>Mongoose for the database ORM</li>
            <li>AWS S3 for image storage</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
