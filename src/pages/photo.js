import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import {Button,TextField} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Gallery, Item } from 'react-photoswipe-gallery'
import '../css/photo.css';

const useStyles = makeStyles((theme) => ({
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
  

function MyGallery(){
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
        <div>
            <h1>Meus álbuns de fotos</h1>
            <Button href="/" className="album-sair" variant="contained" color="primary">
      Sair
     </Button>
     <div>
           <Gallery>
    <Item
      original="https://placekitten.com/1024/768?image=1"
      thumbnail="https://placekitten.com/80/60?image=1"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
      )}
    </Item>
  </Gallery>
  </div>
  <div>
  <div>
      <button className="modal-button" type="button" onClick={handleOpen}>
        Adicionar fotos
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
            <h2 id="transition-modal-title">Adicionar novas fotos</h2>
            <form>
            <TextField required fullWidth className="photo-file" name="file" type="file" id="outlined-basic" variant="outlined" />    
            <TextField required fullWidth className="album-name" name="title" type="text" id="outlined-basic" label="Título" variant="outlined" />
            <TextField required fullWidth className="album-description" name="description" type="text" id="outlined-basic" label="Descrição" variant="outlined" />
            <TextField required fullWidth className="photo-data" name="date" type="datetime-local" id="outlined-basic" variant="outlined" />
            <TextField required fullWidth className="photo-color" name="color" type="text" id="outlined-basic" label="Cor predominante" variant="outlined" />
            <Button type="submit" href="#" className="album-entrar" variant="contained" color="primary">
      Enviar
     </Button>
     </form>
          </div>
        </Fade>
      </Modal>
    </div>
      </div> 
        </div>
    )
}


export default MyGallery