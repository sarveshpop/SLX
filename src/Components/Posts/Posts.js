import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./Post.css";
import { Firebase } from "../../firebase/config";
import BarLoading from "../Loading/BarLoading";
import PostCards from "../PostCards/PostCards";

import { AllPostContext } from "../../contextStore/AllPostContext";

function Posts() {
  const { setAllPost } = useContext(AllPostContext);
  let [posts, setPosts] = useState([]); //for showing all posts in Descending order of date
  let [posts2, setPosts2] = useState([]); //for showing all posts in Ascending order of date
  let [loading, setLoading] = useState(false);
  let [loading2,setLoading2] = useState(false)
  useEffect(() => {
    setLoading(true);
    setLoading2(true)
    Firebase.firestore() //retreving all posts from firebase in descending order
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
        setPosts2(allPostsDescendingOder); //set to post
        setAllPost(allPostsDescendingOder);
        setLoading(false);
      });
    Firebase.firestore() //retreving all posts from firebase in asecnding order of date
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
        setLoading2(false)
        
      });
  }, [setAllPost]);

  let latestListingCards = posts2.map((product, index) => { if(index<6) {
    return (<div className="latest-listing-card" key={index}> <PostCards product={product} index={index} /> </div>);}
    return null 
});
  return (
    <div className="postParentDiv">
     <div className="listings glass">
        <div className="heading">
          <span>Latest Listings</span>
        </div>
        <div className="latest-listing-cards cards">{loading2 ? <BarLoading/> : latestListingCards}</div> 
       <Link to="./viewmore">
        <button className="btn viewBtn"> 
              <span>View more</span>
        </button>
        </Link>
        <br/><br/>
      </div> 
    </div>
  );
}

export default Posts;
