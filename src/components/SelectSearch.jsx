import { useState } from "react";
import 'animate.css';
import '../styles/selectSearch.css';

function SelectSearch({getLimit,getValue,getChange}) {
  const [search, setSearch] = useState('');

  return (
    <div className='container' id="ss_main">
        <div id="ss_child">
            <div>
                <button onClick={()=>getChange('shop')} className='btn red animate__animated animate__jello' style={{ fontFamily: 'Josefin'}} ><i className="material-icons">shopping_cart</i></button>
                <button onClick={()=>getChange('added')} className='btn red animate__animated animate__jello' style={{marginRight: '50px', marginLeft: '20px', fontFamily: 'Josefin'}} ><i className="material-icons">cloud</i></button>
                <button className='btn red animate__animated animate__jello' value={20} style={{margin: '0px 10px', fontFamily: 'Josefin'}} onClick={(e)=>getLimit(e.target.value)}>20</button>
                <button className='btn red animate__animated animate__jello' value={30} style={{margin: '0px 10px', fontFamily: 'Josefin'}} onClick={(e)=>getLimit(e.target.value)}>30</button>
                <button className='btn red animate__animated animate__jello' value={40} style={{margin: '0px 10px', fontFamily: 'Josefin'}} onClick={(e)=>getLimit(e.target.value)}>40</button>
                <button className='btn red animate__animated animate__jello' value={50} style={{margin: '0px 10px', fontFamily: 'Josefin'}} onClick={(e)=>getLimit(e.target.value)}>50</button>
                <button className='btn red animate__animated animate__jello' value={126} style={{margin: '0px 10px', fontFamily: 'Josefin'}} onClick={(e)=>getLimit(e.target.value)}>All</button>
            </div>
            <div>
                <input type="text" id="input" className="form-control animate__animated animate__rollIn" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)} />
                <button onClick={()=>getValue(search)} id="button_search" className='btn red pulse'><i className='material-icons'>search</i></button>
            </div>
        </div>
    </div>
  )
}

export default SelectSearch;