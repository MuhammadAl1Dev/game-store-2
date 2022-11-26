import '../styles/loader.css';

function Loader() {
  return (
    <div className='container' style={{width: '100%', height: '70vh',display: 'flex',justifyContent: 'center', margin: '0 auto', textAlign: 'center', alignItems: 'center' }}>
        <span className="loader"></span>
    </div>
  )
}

export default Loader