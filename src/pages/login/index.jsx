import { useState } from "react";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Logo from "../../assets/images/Group-107.svg";
import InputField from "../../components/InputField";
import Icon from "../../assets/images/SetaProx.svg";
import "./styles.scss";
// import { useHistory } from "react-router-dom";
import firebase from "../../firebaseConfig";

export default function Login(props) {
  // const history = useHistory();
  // const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { href } = props;

  // function createUser(email, password) {
  //   return firebase.auth().createUserWithEmailAndPassword(email, password);
  // }

  async function handleLogin() {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("ERROR : ", error.code);
    }
  }

  // function handleLogout() {
  //   firebase.auth().signOut();
  //   history.push("/login");
  // }

  return (
    <>
      <section className="container-form">
        <div>
          <img className="logo-container-form" src={Logo} alt="Logo-pet" />
        </div>

        <InputField
          idendifier="doador"
          label="Usuário :"
          type="text"
          placeholder="Digite seu usuário..!!"
          value={email}
          onChange={setEmail}
        />

        <InputField
          idendifier="doador"
          label="Senha :"
          type="password"
          placeholder="Digite sua senha.."
          value={password}
          onChange={setPassword}
        />
        <div id="content-text">
          <Text type="textform">
            Ainda não possui conta? <br />
            <a className="text-link" href={href}>
              Cadastre-se
            </a>
          </Text>
        </div>
      </section>
      <footer className="container-btn">
        <Button
          name="Login"
          identifier="green"
          icon={Icon}
          onClick={handleLogin}
        />
      </footer>
    </>
  );
}
