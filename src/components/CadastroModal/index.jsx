import React from "react";
import "./CadastroModal.scss";
import ErrorModal from "../../assets/images/ErrorModal.svg";
// import { useHistory } from "react-router-dom";

const CadastroModal = (props) => {
  const { close } = props;
  // const history = useHistory();

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="close-button-modal" onClick={close}>
          <span className="close-button">X</span>
        </div>

        <img src={ErrorModal} alt=""></img>

        <h4 className="title">Ooops</h4>

        <p className="text">
          Para você poder salvar o perfil desse pet, é necessário fazer um
          cadastro.
        </p>

        <span>Vem, vai ser bem rapidinho! 😸😻</span>
      </div>
    </div>
  );
};

export default CadastroModal;
