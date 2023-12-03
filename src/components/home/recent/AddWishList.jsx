import React, { useState } from "react";
import RecentCss from './Recent.module.css'

const AddWishList = ({itemId}) => {

    const [isAdded, setIsAdded] = useState(false);

    const handleAddToWishlist = () => {
      // setIsAdded(!isAdded)
      setIsAdded((prevAdded) => !prevAdded); 

    };

  return (
    <>
      <button
            type="button"
            className={`p-0 fs-20 border-0 ${RecentCss.wishlistBtn} ${ isAdded ? RecentCss.wishlistAdded : ""} `}
            onClick={handleAddToWishlist} >
            <i className="fa fa-heart"></i>
      </button>
    </>
  );
};

export default AddWishList;
