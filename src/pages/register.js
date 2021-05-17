import '../css/register.css';
import {
  TextField,
  Button
} from '@material-ui/core';

function register() {
  return (
      <div>
    <div className="App-header">
     <h1 className="App-h1">Meus álbuns de fotos</h1>
     <h3 className="App-h3">Faça o seu cadastro:</h3>
     <form>
     <TextField required fullWidth className="App-name" name="name" type="text" id="outlined-basic" label="Nome" variant="outlined" />    
     <TextField required fullWidth className="App-email" name="email" type="email" id="outlined-basic" label="E-mail" variant="outlined" />
     <TextField required fullWidth className="App-password" name="password" type="password" id="outlined-basic" label="Senha" variant="outlined" />
     <a className="App-link" href="/">Cancelar</a>
     <Button type="submit" href="/" className="App-entrar" variant="contained" color="primary">
      Concluir
     </Button>
     </form>
    </div>
    </div>
  );
}

export default register;