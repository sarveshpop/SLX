import React, { Fragment, useState, useContext } from "react";
import "./Create.css";
import { Firebase } from "../../firebase/config";
import { AuthContext } from "../../contextStore/AuthContext";
import { useHistory } from "react-router";

const Create = () => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState();
  let [loading,setLoading]=useState(false);
  
  const handleSubmit = () => {
    setLoading(true);
    let date = new Date().toDateString();
    Firebase.storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          Firebase.firestore()
            .collection("products")
            .add({
              name,
              category,
              price,
              description,
              url,
              userId: user.uid,
              createdAt: date,
            })
            .then(() => {
              history.push("/");
            });
        });
      });
  };
  return (
    <Fragment>
      <div className="centerDiv glass">
        <div className="form-floating">
          <input
            className="form-control" 
            id="floatingName" 
            placeholder="name@example.com"
            type="text"
            name="Product Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}/>
            <label for="floatingName">Product Title</label>
          </div>
          <br />
          <div class="form-floating">
            <select
              name="Category"
              className="form-select" 
              id="floatingSelect" 
              aria-label="Floating label select"  
              onChange={(e) => {
              setCategory(e.target.value);
                }}> 
                <option>Select...</option>
                <option value="Cars">Cars</option>
                <option value="Properties">Properties</option>
                <option value="Computers & Laptops">Computers & Laptops</option>
                <option value="Phones & Cameras">Phones & Cameras</option>
                <option value="Motorcycles">Motorcycles</option>
                <option value="Other">Other</option>
            </select>
            <label for="floatingSelect">Product Category</label>
          </div>
        <br />
        <div class="form-floating">
        <input
          className="form-control"
          type="number"
          name="Product Price"
          id="floatingPrice"
          placeholder="XXXX"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}/>
          <label for="floatingPrice">Product Price</label>
        </div>
        <br />
        <div class="form-floating">
        <textarea
          className="form-control"
          type="text"
          name="Product Description"
          id="floatingDescription"
          placeholder="Description"
          value={description}
          style={{height: "100px", resize: "none"}}
          onChange={(e) => {
            setDescription(e.target.value);
          }}/>
          <label for="floatingDescription">Product Description</label>
        </div>
        <br />
        <img
          alt=""
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ""}/>
        <br />
        <label for="formFile" className="form-label">Select the product image</label>
        <input
          className="form-control   "
          type="file"
          id="formFile"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <button className="btn uploadBtn" onClick={handleSubmit}>
          Post Now
        </button>
      </div> 
    </Fragment>
  );
};

export default Create;
