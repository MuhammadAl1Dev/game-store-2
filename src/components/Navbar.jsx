import React from "react";

function Navbar() {
  return (
    <nav style={{position: 'fixed', zIndex:'99',fontFamily: 'Josefin', background: '#EA4034'}}>
        <div className="container" style={{ textAlign: 'center'}}>
            <a href="/" style={{fontSize: '35px'}}>Store</a>
            <i className="material-icons animate__animated animate__hinge" style={{color: '#fff', position: 'absolute', fontSize: '50px', top: 0}}>insert_emoticon</i> 
        </div>
    </nav>
  );
}

export default Navbar;
