import React, {useState} from 'react';
import Input from '../../components/input';
import PrimaryButton from '../../components/primary-button';
import axios from 'axios';


type Props = {
  setToken : (token: string) => void;
}

const Login = ({setToken} : Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    axios.post('https://api.lysande.pepintrie.fr/auth/login',
        {
          email: email,
          password: password,
        }).then(
        (response) => {
          console.log(response);
        });
  };

  return (
    <div className="
      min-h-screen
      bg-cover
      h-full
      bg-[url('pages/login/login-background.png')]
      flex
      items-center
      justify-center
    ">
      <form className="
        gap-4
        pt-8
        pb-28
        flex
        flex-col
        bg-orange/[.8]
        h-3/4
        w-5/12
        rounded-3xl
        justify-around
        items-center
      ">
        <Input
          value={email}
          placeholder="Email"
          type="email"
          setValueString={setEmail}
        />
        <Input
          value={password}
          setValueString={setPassword}
          placeholder="Mot de passe"
          type="password"
        />
        <PrimaryButton onClick={login} text={'Connexion'}
        />
      </form>
    </div>
  );
};

export default Login;
