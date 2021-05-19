import '../css/App.css';
import React, { useState } from 'react';
import api from '../services/api';
import {
  TextField,
  Button
} from '@material-ui/core';

function Login() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function auth() {
    try{

      const data = await api.post('/login', {
        email: email,
        password: password
      })


      localStorage.setItem('User',JSON.stringify(data))

      console.log(data);  

      return window.location.href = "/albuns"

    }catch(error){
      
      alert("Senha ou Email são inválidos ");

      console.log(error);
    
    }
  
  }

  
  return (
      <div className="App">
    <div className="App-header">
     <h1 className="App-h1">Meus álbuns de fotos</h1>
     <h3 className="App-h3">Autentique-se</h3>
     <form>
     <TextField required fullWidth className="App-email" name="email" type="email" id="outlined-basic" label="E-mail" variant="outlined" onChange={ e => setEmail(e.target.value) } />
     <TextField required fullWidth className="App-password" name="password" type="password" id="outlined-basic" label="Senha" variant="outlined" onChange={ e => setPassword(e.target.value) }/>
     <a className="App-link" href="/cadastro">Cadastre-se</a>
     <Button className="App-entrar" variant="contained" color="primary"  onClick={()=>auth()}>
      Entrar
     </Button>
     </form>
    </div>
    </div>
  );
}

export default Login;