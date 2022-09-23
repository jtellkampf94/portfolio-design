import OutsideClickHandler from "react-outside-click-handler";

import "./index.scss";

const WorkCarousel = ({ handleOutsideClick }) => {
  return (
    <div className="work-carousel__overlay">
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <div className="work-carousel">
          <h1>WORK</h1>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default WorkCarousel;
