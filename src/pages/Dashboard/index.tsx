import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root2: {
      width: '100%',
      maxHeight: 350,
      backgroundColor: 'white',
    },
    root: {
      maxWidth: 380,
    },
    media: {
      height: 310,
    },
    paper: {
      backgroundColor: '#cfe8fc',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      color: 'black',
      borderRadius: 25,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Dashboard: React.FC = () => {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const names = [
    'Íris Fraga',
    'Sheila Mesquita',
    'Marwa Fidalgo',
    'Izabella Cordeiro',
    'Esther Alpuim',
    'Jennifer Breia',
    'Tânia Linhares',
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="transition-modal-title">Descrição</h2>
      <p id="transition-modal-description">
        Este usuário, é uma pessoa registrada no sistema!
      </p>
    </div>
  );

  return (
    <Container
      disableGutters
      maxWidth="xs"
      style={{ backgroundColor: '#cfe8fc', height: '100vh', maxWidth: '100vw' }}
    >
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" style={{ flexGrow: 1, color: 'white' }}>
            Dashboard
          </Typography>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar src="https://images.pexels.com/photos/2517765/pexels-photo-2517765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="span" m={10}>
        <Grid
          container
          spacing={4}
          direction="row"
          justify="center"
          alignItems="center"
          style={{
            maxWidth: '100vw',
            maxHeight: '100vh',
          }}
        >
          <Grid item xs={2}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Natureza
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Árvores e rios.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartilhar
                </Button>
                <Button size="small" color="primary">
                  Ler mais
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/2793170/pexels-photo-2793170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Estradas
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Pistas para viajar.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartilhar
                </Button>
                <Button size="small" color="primary">
                  Ler mais
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Animais
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Animal de estimação.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartilhar
                </Button>
                <Button size="small" color="primary">
                  Ler mais
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Container
        maxWidth="lg"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <List dense className={classes.root2}>
          {names.map(value => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem key={value} button onClick={handleOpen}>
                <ListItemAvatar>
                  <Avatar src="https://image.freepik.com/fotos-gratis/metade-da-imagem-do-perfil-de-uma-mulher-de-meia-idade-atraente-e-alegre-com-cabelo-curto-e-grisalho-e-rugas-se-divertindo-rindo-da-piada-e-sorrindo-amplamente-para-a-camera_343059-1891.jpg" />
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  primary={value}
                  primaryTypographyProps={{
                    style: {
                      color: 'black',
                    },
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {body}
      </Modal>
    </Container>
  );
};

export default Dashboard;
