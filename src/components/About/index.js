import WorkStation from "../../assets/images/work-station.jpg";
import "./index.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <h1>About Me</h1>
      </div>
      <div className="about__container">
        <img src={WorkStation} alt="Work Station" className="about__image" />

        <div className="about__description">
          <p>
            Hi, I'm Jonathan Tellkampf, a full stack web developer based in the
            North London area. I predominantly work with technologies that use
            JavaScript, TypeScript and SQL programming languages. I am
            passionate about coding and can work on both sides of the stack,
            from building UI components on the front end, to implementing server
            side functionality on the back end.
          </p>

          <p>
            I can help you create cost effective digital products that solve
            business and customer needs. I am adaptable and willing to learn
            outside my scope of knowledge to produce solutions for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
