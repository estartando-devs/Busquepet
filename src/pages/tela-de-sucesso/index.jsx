import Text from "../../components/Text";
import logo from "../../assets/images/LogoSucess.svg";
import SetaProx from "../../assets/images/SetaProx.svg";
import Button from "../../components/button"
import "./style.scss";

function Sucess() {
  return (
    <div className="container">
      <Text
        className="titulo"
        type="textfinal"
        children="Seu perfil foi cadastrado com sucesso!!"
      />

      <img className="logo" src={logo} alt="" />

      <Text
        type="textfinal2"
        children="Agora, vamos cadastrar seu animalzinho?!"
        className="titulo"
      />
      <div className="buttons">
        <Button name="Pular" identifier="white" />
        <Button name="Vamos" icon={SetaProx} identifier="green" />
      </div>
    </div>
  );
}

export default Sucess;
