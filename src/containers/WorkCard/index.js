import { useState } from "react";
import WorkCarousel from "../../components/WorkCarousel";

import Modal from "../Modal";

const WorkCard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        open
      </button>
      <Modal open={openModal}>
        <WorkCarousel handleOutsideClick={() => setOpenModal(false)} />
      </Modal>
    </div>
  );
};

export default WorkCard;
