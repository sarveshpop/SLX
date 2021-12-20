import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../contextStore/PostContext";
import { Firebase } from "../../firebase/config";
import { useHistory } from "react-router";
import {  Row } from "react-bootstrap";
import "./View.css";
function View() {
  let { postContent } = useContext(PostContext);

  const [userDetails, setUserDetails] = useState();
  const history = useHistory();
  useEffect(() => {
    let { userId } = postContent;
    if (userId === undefined) {
      history.push("/");
    } else {
      Firebase.firestore()
        .collection("users")
        .where("id", "==", userId)
        .get()
        .then((res) => {
          res.forEach((doc) => {
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
        <h5 className="headingProduct">Product Description</h5>
        <p>{postContent.description}</p>
      </Row>
      </div>
      <div className="rightSection col-md-4">
        <div className="productDetails glass">
          <p>&#x20B9; {postContent.price} </p>
          <span>{postContent.name}</span>
         

          {/*    Implement Later
           <span className="material-icons">
          favorite_border
          </span> */}

          <p>{postContent.category}</p>
          <button className="btn loginxCreateBtn"> Buy Now</button>
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
    </div>
  );
}
export default View;
