import React from "react";
import Loader from "../layout/Loader";
import "../styles/shoppingcard.css";
import M from 'materialize-css';
import 'animate.css';

function ShoppingCard({ getChange, setIsOpen, shop, removeList }) {
  return (
    <div
      className="shopping_div"
      onClick={() =>
        setIsOpen({
          open: false,
          status: "",
        })
      }
    >
      <button
        style={{ position: "absolute", top: "70px" }}
        className="btn red"
        onClick={() => getChange("")}
      >
        <i className="material-icons">close</i>
      </button>
      <div className="places_fiv animate__animated animate__fadeInUp" onClick={(e) => e.stopPropagation()}>
        <>
          {shop.length ? (
            shop.map((val) => {
              return (
                <div id="shopping_card">
                  <img src={val.img ? val.img : <Loader />} style={{width: '150px', height: '130px'}} alt="img" />
                  <h4>{val.name.slice(0,5)}</h4>
                  <h6>{val.cost * val.miqdor}$</h6>
                  <h6><b>{val.miqdor}X</b></h6>
                  <button className="btn red" onClick={()=>{
                    removeList(val.id)
                    M.toast({html: 'Deleted', classes: 'rounded'})
                    }}>
                    <i className="material-icons">delete_forever</i>
                  </button>
                </div>
              );
            })
          ) : (
            <h4 style={{fontFamily: 'Josefin'}}>Nothing found</h4>
          )}
        </>
      </div>
    </div>
  );
}

export default ShoppingCard;
