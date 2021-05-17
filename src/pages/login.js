import '../css/App.css';
import {
  TextField,
  Button
} from '@material-ui/core';

function Login() {
  return (
      <div className="App">
    <div className="App-header">
     <h1 className="App-h1">Meus álbuns de fotos</h1>
     <h3 className="App-h3">Autentique-se</h3>
     <form>
     <TextField required fullWidth className="App-email" name="email" type="email" id="outlined-basic" label="E-mail" variant="outlined" />
     <TextField required fullWidth className="App-password" name="password" type="password" id="outlined-basic" label="Senha" variant="outlined" />
     <a className="App-link" href="/cadastro">Cadastre-se</a>
     <Button className="App-entrar" variant="contained" color="primary">
      Entrar
     </Button>
     </form>
    </div>
    </div>
  );
}

export default Login;