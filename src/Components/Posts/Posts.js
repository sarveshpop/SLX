import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./Post.css";
import { Firebase } from "../../firebase/config";
import PostCards from "../PostCards/PostCards";

import { AllPostContext } from "../../contextStore/AllPostContext";

function Posts() {
  const { setAllPost } = useContext(AllPostContext);
  let [, setPosts] = useState([]);
  let [posts2, setPosts2] = useState([]); 
  
  useEffect(() => {
    Firebase.firestore() 
      .collection("products")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        let allPostsDescendingOder = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setPosts2(allPostsDescendingOder); 
        setAllPost(allPostsDescendingOder);
      });
    Firebase.firestore() 
      .collection("products")
      .orderBy("createdAt", "asc")
      .get()
      .then((snapshot) => {
        let allPostsAscendingOder = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setPosts(allPostsAscendingOder);
        
      });
  }, [setAllPost]);

  let latestListingCards = posts2.map((product, index) => { if(index<6) {
    return (<div className="latest-listing-card" key={index}> <PostCards product={product} index={index} /> </div>);}
    return null 
});
  return (
    <div className="postParentDiv container-fluid">
      <h1 className="text-center fs-1">Buy Now</h1>
      <br/>
     <div className="listings glass">
        <div className="heading">
          <span>Latest Listings</span>
        </div>
        <div className="latest-listing-cards cards">{latestListingCards}</div> 
       <Link to="./viewmore">
        <button className="btn viewBtn"> 
              <span>View more</span>
        </button>
        </Link>
        <br/>
        <br/><br/>
      </div> 
    </div>
  );
}

export default Posts;
