import 'animate.css';

function NotFound() {
  return (
    <div className='container' style={{width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', textAlign: 'center',alignItems: 'center',fontFamily: 'Josefin'}}> 
        <h3 className='animate__animated animate__swing' style={{color: 'red'}}>404 not found <i style={{fontSize: '36px'}} className='material-icons'>sentiment_very_dissatisfied</i> </h3>
        <button className='btn red pulse animate__animated animate__swing' style={{marginLeft: '10px'}}><a href="/" style={{color: '#fff', fontFamily: 'Josefin'}}>Back</a></button>
    </div>
  )
}

export default NotFound;