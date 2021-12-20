/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { useHistory } from "react-router";
import CssBaseline from '@mui/material/CssBaseline';
import "./Header.css";
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { SwipeableDrawer } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logoW from "../../assets/LogoW.png"
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextStore/AuthContext";
import { Firebase } from "../../firebase/config";
import Search from "../Search/Search";
import { Modal, Backdrop, Fade } from "@mui/material";
import "../Login/Login.css";
import Login from '../Login/Login'
import Signup from "../Signup/Signup";
import Create from "../Create/Create";


function Header(props) {
  // const{allPost}=useContext(AllPostContext)
  // const{setPostContent}=useContext(PostContext)
  const history = useHistory();
  // const [filteredData, setFilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");
  /* const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allPost.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }; */

 /*  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleSelectedSearch=(value)=>{
       setPostContent(value)
       history.push("/view")

  }
  const handleEmptyClick=()=>{
     alert("No items found.., please search by product name");
  } */

    const { user } = useContext(AuthContext);
  
  const logoutHandler = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  };

  const [openSignup, setOpenSignup] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openCreate, setOpenCreate] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false)
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const drawer = (
        <React.Fragment>
          <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} 
           open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
           <div className="glass"/>
           {user ? (<Container>
                <List >
            <ListItem 
            onClick={()=> {setOpenDrawer(false); }}
            button>
              <ListItemText className="listText" disableTypography> Hello, {user.displayName} </ListItemText>
            </ListItem>

            <ListItem 
            onClick={()=> {setOpenDrawer(false); }}
            button>
              <ListItemText className="listText" disableTypography> Profile </ListItemText>
            </ListItem>

            <Link to="./viewmore">
            <ListItem 
            onClick={()=> {setOpenDrawer(false); }}
            button>
              <ListItemText className="listText" disableTypography> Browse </ListItemText>
            </ListItem>
            </Link>

            <ListItem 
            onClick={()=> {setOpenDrawer(false); handleOpenCreate(true)}}
            button>
              <ListItemText className="listText" disableTypography> Sell </ListItemText>
            </ListItem>

            <ListItem 
            onClick={()=> {setOpenDrawer(false); logoutHandler(true)}}
            button>
              <ListItemText className="listText" disableTypography>Logout</ListItemText>
            </ListItem>

          </List>
           </Container>) : (

             <Container>
                <List >
            <ListItem 
            onClick={()=> {setOpenDrawer(false); handleOpenLogin(true)}}
            button>
              <ListItemText className="listText" disableTypography> Login </ListItemText>
            </ListItem>

            <ListItem 
            onClick={()=> {setOpenDrawer(false); handleOpenSignup(true)}}
            button>
              <ListItemText className="listText" disableTypography> Signup </ListItemText>
            </ListItem>

            <Link to="./viewmore">
            <ListItem 
            onClick={()=> {setOpenDrawer(false); }}
            button>
              <ListItemText className="listText" disableTypography> Browse </ListItemText>
            </ListItem>
            </Link>

          </List>
           </Container>
           )}
          
          </SwipeableDrawer>
        </React.Fragment>
      )

function HideOnScroll(props) {
  const { children, window } = props;

  

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
    <AppBar elevation={3} color="transparent" className="glassBar">
    <Toolbar>
          <span className="material-icons svgBtn menuBtn" onClick={() => setOpenDrawer(!openDrawer)}>menu</span>
          {drawer}
            <div xs={2} display='block' className="brand d-flex justify-content-start">
              <a href="/" component={Link} to="/"><img src={logoW} alt="logo" className="brandLogo" /></a>
            </div>

        <div className="productSearch">
          <Search />
        </div>
        <div className="appBarEnd">
        <Link to="./viewmore">
          <button className="btn loginBtn">
                <span className="material-icons svgBtn">apps</span>
                 <span>Browse</span>
          </button>
          </Link>
        <div className="login">
          {user ? (<Container>
          <div className="loggedInGroup">
             <span className="material-icons profileBtn">
              account_circle
              </span>
              <div className="dropdown">
              <span className="material-icons dropbtn ">
              expand_more
              </span>
              <div className="dropdown-content">
              <span className="greet">Hello, {user.displayName}</span>
              <a href="/profile">View Profile</a>
              <a href="#" onClick={logoutHandler}><span onClick={logoutHandler} className="logout-span">
              <span className="material-icons svgBtn">logout</span>
              Logout</span></a>
              </div>  
              </div>
              <button className="btn sellBtn" onClick={handleOpenCreate}>
                <span className="material-icons svgBtn">storefront</span>
                <span>SELL</span>
             </button>
          </div>
          </Container>
            /*  */
          ) : (
            <>
            <button className="btn outline loginBtn" onClick={handleOpenLogin}>
                <span className="material-icons svgBtn">login</span>
                 <span>Login</span>
              </button>
              <button className="btn outline loginBtn" onClick={handleOpenSignup}>
              <span className="material-icons svgBtn">person_add</span>
                  <span>Sign-up</span>
              </button></>
          )}
        </div>
        
          
        </div>
        </Toolbar>
    </AppBar>

    </HideOnScroll>
    <br/> 
    
            <Modal
        aria-labelledby="Login Modal"
        open={openLogin}
        onClose={handleCloseLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
    <Fade in={openLogin}>
          <Box>
      <Login/>
    </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="Sign-Up Modal"
        open={openSignup}
        onClose={handleCloseSignup}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
    <Fade in={openSignup}>
          <Box>
    <Signup/>
    </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="Create Modal"
        open={openCreate}
        onClose={handleCloseCreate}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
    <Fade in={openCreate}>
          <Box>
    <Create/>
    </Box>
        </Fade>
      </Modal>

          
    </React.Fragment>
  );
}

export default Header;
