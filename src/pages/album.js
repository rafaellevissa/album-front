import React from 'react';
import{ useState, useEffect } from 'react';
import {TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import capa from '../images/Texture_Brown.jpg';
import Link from '@material-ui/core/Link';
import '../css/album.css';
import api from '../services/api';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
      },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function Album() {
  const [ user_id, setUser_id] = useState(0);
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ albuns, setAlbuns ] = useState([]);

  
  useEffect(async()=>{

    const id_user = localStorage.getItem('User')
    const responseAlbuns = await api.get(`/album/user/${id_user}`)
    if(responseAlbuns.data.length === 0){
      return setAlbuns([
        title= '',
        description= ''
      ])
    }
    return setAlbuns(responseAlbuns.data.data)
  },[])

  async function cadastrar() {

    try{
      await api.post('/album',{
      title:title,
      description:description,
      user_id:user_id,
    })

    alert("Voce foi cadastrado");

    return window.location.href = "/albuns"

  }
  catch(error){ //DEBUG do ERRO
    console.log('Houve erro!')
  }
}

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='d-flex align-items-stretch'>
        <h1>Meus álbuns de fotos</h1>
        <Button href="/" className="album-sair" variant="contained" color="primary">
      Sair
     </Button>
    <div className="album-div">
      {albuns.map((albumParam) => (
      
      <Link key={albumParam.id} href="/photo/:id" color="inherit" style={{textDecoration:'none'}}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Capa de couro do álbum"
            height="140"
            image={capa}
            title="Capa de couro do álbum"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {albumParam?.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {albumParam?.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Link>
      ))}

    </div>
    <div>
      <button className="modal-button" type="button" onClick={handleOpen}>
        Criar novo álbum
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Criar novo álbum</h2>
            <form>
            <TextField required fullWidth className="album-name" name="title" type="text" id="outlined-basic" label="Título" variant="outlined" onChange={ e => setTitle(e.target.value) } />
            <TextField required fullWidth className="album-description" name="description" type="text" id="outlined-basic" label="Descrição" variant="outlined" onChange={ e => setDescription(e.target.value) } />
            <TextField required fullWidth className="user_id" name="user_id" type="number" id="outlined-basic" label="numero" variant="outlined" onChange={ e => setUser_id(e.target.value) } />
            <Button type="submit" onClick={cadastrar} className="album-entrar" variant="contained" color="primary">
      Concluir
     </Button>
     </form>
          </div>
        </Fade>
      </Modal>
    </div>
    </div>
  );
}