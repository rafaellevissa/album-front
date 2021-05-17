import React from 'react';
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
    <Link href="/" color="inherit" style={{textDecoration:'none'}}>
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
            Aniversário da minha filha
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Álbum de fotos do aniversário da minha filha querida
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    </div>
    <div className="album-div2">
    <Link href="/" color="inherit" style={{textDecoration:'none'}}>
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
            Aniversário da minha filha
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Álbum de fotos do aniversário da minha filha querida
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
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
            <TextField required fullWidth className="album-name" name="title" type="text" id="outlined-basic" label="Título" variant="outlined" />
            <TextField required fullWidth className="album-description" name="description" type="text" id="outlined-basic" label="Descrição" variant="outlined" />
            <Button type="submit" href="#" className="album-entrar" variant="contained" color="primary">
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