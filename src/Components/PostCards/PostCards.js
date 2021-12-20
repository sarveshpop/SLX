import React,{useContext} from 'react'
import {useHistory} from "react-router-dom";
import {PostContext} from "../../contextStore/PostContext";
import "./postcards.css"

function PostCards({product,index}) {
    let {setPostContent} = useContext(PostContext)

    const history=useHistory()

    return (
      <div className="card" key={index} onClick={()=>{
        setPostContent(product)
        history.push("/view")
      }}>
        <div className="image">
          <img src={product.url} alt="" />
        </div>
        <div className="content">
         <p className="name"> {product.name}</p>
          <p className="rate">&#x20B9; {product.price}</p>
          
          
        </div>
        <div className="date">
          <span>{product.createdAt}</span>
        </div>
      </div>
       
    )
}

export default PostCards
