import React,{useState, useContext} from 'react'
import {AllPostContext} from "..//../contextStore/AllPostContext"
import { PostContext } from '../../contextStore/PostContext'
import { useHistory } from 'react-router'
import "./search.css"
function Search() {

    const {allPost,setAllPost}=useContext(AllPostContext)
    const {setPostContent}=useContext(PostContext)
    const history=useHistory()
    
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allPost.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())||value.category.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleSelectedSearch=(item)=>{
       setPostContent(item)
       history.push("/view")
  }
  const handleSearchClick=()=>{
    if(filteredData.length===0){
     alert("No items found.., please search by product category or product name");
     }
     
     else {setAllPost(filteredData);
     history.push("/viewmore")}
     
  }
  return (

    <div className="search">
      <div className="searchInputs">
        <div className="input-group">
        <input
          type="string"
          placeholder=" Search..."
          className="form-control" 
          id="floatingSearch"
          value={wordEntered}
          onChange={handleFilter}/>
          <span className="input-group-text btn" id="basic-addon1" onClick={handleSearchClick} ><span className="material-icons svgBtn">search</span></span>
          </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={key} className="dataItem" onClick={()=>handleSelectedSearch(value)}>
                <p>{value.name} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search
