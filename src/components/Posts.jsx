import Loader from "../layout/Loader";
import "../styles/posts.css";
import 'animate.css';
import M from 'materialize-css';

import picture from "../images/sigmund-By-tZImt0Ms-unsplash.jpg";

function Posts({ posts, limit,getDetails2, getDetails }) {
  return (
    <div>
      <div id="cards_main">
        {posts.length ? (
          posts.map(({ item, store,itemId }, idx) => {
            const { images, ratings } = item;
            if (idx < limit) {
              return (
                <div
                  className="col s6 m7 animate__animated animate__fadeInUp"
                  key={idx}
                  style={{ padding: "0px 15px", fontFamily: 'Josefin' }}
                >
                  <div className="card z-depth-4" style={{ height: "500px" }}>
                    <div className="card-image">
                      <img
                        src={images.featured ? images.featured : picture}
                        alt="images"
                        style={{
                          height: "280px",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                        }}
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-title">{item.name}</span>
                      <>{ratings.avgStars < 4 ? 
                        <>
                          <i className="material-icons" style={{color: 'gold'}}>star</i>
                          <i className="material-icons" style={{color: 'gold'}}>star</i>
                          <i className="material-icons" style={{color: 'gold'}}>star</i>
                          <i className="material-icons" style={{color: 'gold'}}>star</i>
                        </>
                       :
                        <>
                          <i className="material-icons" style={{color: 'gold'}}>star</i>
                          <i className="material-icons" style={{color: 'gold'}}>star</i>
                          <i className="material-icons" style={{color: 'gold'}}>star</i>
                          <i className="material-icons" style={{color: 'gold'}}>star</i>
                          <i className="material-icons" style={{color: 'gold'}}>star</i>
                        </>
                       }</>
                    </div>
                    <div>
                    <b>{store.cost}$</b>
                    </div>
                    <div className="card-action">
                      <button className="btn red" style={{fontFamily: 'Josefin', marginRight: '10px'}}
                      onClick={()=>{
                        getDetails({id:itemId,name:item.name,cost:store.cost,img:images.icon})
                        M.toast({html: 'Added to the shop', classes: 'rounded'})
                      }}
                      ><i className="material-icons">shop</i></button>
                      <button className="btn red" style={{fontFamily: 'Josefin', marginLeft: '10px'}}
                      onClick={()=>{
                        getDetails2({id:itemId,name:item.name,cost:store.cost,img:images.icon})
                        M.toast({html: 'Added to the Cloud', classes: 'rounded'})
                      }}
                      ><i className="material-icons">archive</i></button>
                    </div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Posts;
