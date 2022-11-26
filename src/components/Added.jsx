import '../styles/added.css';
import 'animate.css';
import Loader from '../layout/Loader';
import M from 'materialize-css';

function Added({getChange,added,removeList2,getDetails3}) {
  return (
    <div className='added_div'>
        <button className='btn red' onClick={() => getChange("")} style={{ position: "absolute", top: "70px" }}>
            <i className='material-icons'>close</i></button>
        <div className='added_child animate__animated animate__fadeInDown'>
        <>
          {added.length ? (
            added.map((val) => {
              return (
                <div id='added_div' key={val.id} style={{display: 'flex', justifyContent: 'space-around', padding: '15px', 
                  textAlign: 'center', alignItems: 'center', fontFamily: 'Josefin',
                  border: '2px solid gold', margin: '10px', borderRadius: '10px'
                  }}>
                  <img src={val.img ? val.img : <Loader />} style={{width: '150px', height: '130px'}} alt="img" />
                  <h4>{val.name.slice(0,5)}</h4>
                  <h6>{val.cost}$</h6>
                  <h6><b>{val.miqdor}X</b></h6>
                  <button className='btn yellow' style={{color: 'black'}}
                  onClick={()=>{
                    getDetails3({id:val.id,name:val.name,img:val.img,cost:val.cost,miqdor:val.miqdor})
                    removeList2(val.id)
                    M.toast({html: 'Done', classes: 'rounded'})
                  }}
                  >Buy</button>
                  <button className="btn red" onClick={()=>{
                    removeList2(val.id)
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
  )
}

export default Added;