import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextStore/AuthContext";
import { PostContext } from "../../contextStore/PostContext";
import { Firebase } from "../../firebase/config";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useHistory } from "react-router";
import Box from '@mui/material/Box';
import { Modal, Backdrop, Fade } from "@mui/material";
import {  Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./View.css";



function View() {
  let { postContent } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  const db = Firebase.firestore();
  const [userDetails, setUserDetails] = useState();
  const userRef = doc(db, "users", user.uid);

  
  const history = useHistory();

   const processPurchase = () => {
    setOpenPopup(true);

        updateDoc(userRef, {
        orders: arrayUnion(postContent.name)});
        db.collection('products').doc(postContent.id).delete()
        console.log('deleted!')

   }


  const [openPopup, setOpenPopup] = React.useState(false)

  const handleClosePopup= () => setOpenPopup(false);



  useEffect(() => {
    let { userId } = postContent;
    if (userId === undefined) {
      history.push("/");
    } else {
      Firebase.firestore()
        .collection("users")
        .where("id", "==", userId)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            setUserDetails(doc.data());
          });
        });
    }
  }, [history, postContent]);


  return (
    <div className="viewParentDiv container">
    <div className="productSection glass col-md-8">
      <Row className="imageShowDiv">
        <img src={postContent.url} alt="Product" />
      </Row>{" "}
      <Row className="productInfo">
        <h4 className="productName">{postContent.name}</h4>
        <h4 className="mobile">&#x20B9; {postContent.price} </h4>
        <br/>
        <h5 className="headingProduct">Product Description</h5>
        <p>{postContent.description}</p>
        <br/>
        <h5 className="text-center pt-5 mobile">Seller details</h5>
        <div>
        {userDetails &&
         <><p className="mobile"> Name: {userDetails.name} </p><p className="mobile"> Phone: {userDetails.phone} </p></> }
        </div>
        <button className="btn loginxCreateBtn mobile" onClick={()=>  processPurchase() }>Buy Now</button>   
      </Row>
      </div>
     
      <div className="rightSection col-md-4 lff">
        <div className="productDetails glass">
          <p>&#x20B9; {postContent.price} </p>
          <span>{postContent.name}</span>
         

          {/*    Implement Later
           <span className="material-icons">
          favorite_border
          </span> */}

          <p>{postContent.category}</p>
          <button className="btn loginxCreateBtn" onClick={ ()=>  processPurchase()  }> Buy Now</button>
          <span className="date">{postContent.createdAt}</span>
             
      
        </div>    
        <div>
          {userDetails &&
          <div className="contactDetails glass">
            <p className="p-bold">Seller details</p>
            <p>Name : {userDetails.name}</p>
            <p>Phone : {userDetails.phone}</p>  
          </div>
          }
        </div> 
       
      </div>
      <Modal
        aria-labelledby="Create Modal"
        open={openPopup}
        onClose={handleClosePopup}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
    <Fade in={openPopup}>
          <Box>
        <div className=" successPopup">
          <div className="successHead">
          <span className="material-icons svgIcon">task_alt</span>
          <h2 className="successTitle text-center">  Your order has been placed!</h2></div>
          <p className="text-center fs-5">Your order for <b>{postContent.name}</b> has been successfully placed.
           The seller will be notified immediately. Thank you for choosing SLX. </p>
           <div className="d-flex btnNavGroup">
           <Link to="./">
             <button className="btn successNavBtn">
               Back to Home
             </button>
             </Link>
             <Link to="./viewmore">
             <button className="btn successNavBtn impNavBtn">
               Continue Shopping
             </button>
             </Link>
           </div>
        </div>
    </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default View;
