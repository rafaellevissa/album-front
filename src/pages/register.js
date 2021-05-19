import '../css/register.css';
import api from '../services/api';
import React, { useState } from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';

function Register() {
  
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  console.log("pssa1");

  async function cadastrar() {

    try{
      await api.post('/user',{
      name:name,
      email:email,
      password:password,
    })
     
     
      alert("Voce foi cadastrado");

      return window.location.href = "/albuns"

    }
    catch(error){ //DEBUG do ERRO
      console.log('Houve erro!')
    }
  }

  
  return (
      <div>
    <div className="App-header">
     <h1 className="App-h1">Meus álbuns de fotos</h1>
     <h3 className="App-h3">Faça o seu cadastro:</h3>
     <form>
     <TextField required fullWidth className="App-name" name="name" type="text" id="outlined-basic" label="Nome" variant="outlined" onChange={ e => setName(e.target.value) }/>    
     <TextField required fullWidth className="App-email" name="email" type="email" id="outlined-basic" label="E-mail" variant="outlined" onChange={ e => setEmail(e.target.value) }/>
     <TextField required fullWidth className="App-password" name="password" type="password" id="outlined-basic" label="Senha" variant="outlined" onChange={ e => setPassword(e.target.value) }/>
     <a className="App-link" href="/">Cancelar</a>
     <Button type="submit" className="App-entrar" variant="contained" color="primary" onClick={()=>cadastrar()}>
      Concluir
     </Button>
     </form>
    </div>
    </div>
  );
}

export default Register;