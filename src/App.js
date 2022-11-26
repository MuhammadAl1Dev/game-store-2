import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import SelectSearch from './components/SelectSearch';
import M from 'materialize-css';
import NotFound from './components/NotFound';
import ShoppingCard from './components/ShoppingCard';
import Added from './components/Added';

function App() {
  const [posts, setPosts] = useState([]);
  const [posts2, setPosts2] = useState([]);
  const [limit, setLimit] = useState(12);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState({
    status: '',
    open: false
  });
  const [shop, setShop] = useState([]);
  const [added, setAdded] = useState([]);

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'string',
        'X-RapidAPI-Key': '2b93e030a1msh1f83bdaa18b25dcp1d2732jsn60aaf549e241',
        'X-RapidAPI-Host': 'fortnite1.p.rapidapi.com'
      }
    };
    
    fetch('https://fortnite1.p.rapidapi.com/store/get', options)
      .then(response => response.json())
      .then(res => {
        setPosts(res.data)
        setPosts2(res.data)
      })
      .catch(err => console.error(err));
  },[])

  function getLimit(limit){
    setLimit(limit)
    M.toast({html: 'Clicked', classes: 'rounded'})
  }

  function getValue(search){
    if(search){
      let newMass = posts.filter((s)=>s.item.name == search)
      setPosts2(newMass)
      if(!newMass.length){
        setError(true)
      }else{
        setError(false)
      }
    }else{
      setPosts2(posts)
    }
  }

  function getDetails(obj){
    let isExt = shop.some(s=>s.id === obj.id)
    if(isExt){
      let newMass = shop.map((item)=>{
        if(item.id === obj.id){
          return{
            ...item,
            miqdor:item.miqdor + 1
          }
        }else{
          return item
        } 
      });
      setShop(newMass);
    }else{
      setShop([...shop,{...obj, miqdor:1}])
    }
  }  

  function getDetails2(obj){
    let isExt = added.some(s=>s.id === obj.id)
    if(isExt){
      let newMass = added.map((item)=>{
        if(item.id === obj.id){
          return{
            ...item,
            miqdor:item.miqdor + 1
          }
        }else{
          return item
        } 
      });
      setAdded(newMass);
    }else{
      setAdded([...added,{...obj, miqdor:1}])
    }
  }

  function getDetails3(obj){
    let isExt = shop.some(s=>s.id === obj.id)
    if(isExt){
      let newMass = shop.map((item)=>{
        if(item.id === obj.id){
          return{
            ...item,
            miqdor:item.miqdor + 1
          }
        }else{
          return item
        } 
      });
      setShop(newMass);
    }else{
      setShop([...shop,{...obj, miqdor:obj.miqdor}])
    }
  }

  const getChange = (status) => {
    setIsOpen({
      open: true,
      status
    })
  }

  const removeList = (id) => {
    let newMass = shop.filter(s=>s.id !== id);
    setShop(newMass);
  }

  const removeList2 = (id) => {
    let newMass = added.filter(s=>s.id !== id);
    setAdded(newMass);
  }

  return (
    <>
      <Navbar />
      <SelectSearch getLimit={getLimit} getValue={getValue} getChange={getChange}/>
      {
        error
        ? 
        <NotFound />
        : 
        <Posts posts={posts2} limit={limit} getDetails={getDetails} getDetails2={getDetails2}/>
      }
      {
        (isOpen.status == 'shop' && isOpen.open) && <ShoppingCard getChange={getChange} setIsOpen={setIsOpen} shop={shop} removeList={removeList}/> 
      }
      {
        (isOpen.status == 'added' && isOpen.open) && <Added getDetails3={getDetails3} getChange={getChange} added={added} removeList2={removeList2} /> 
      }
    </>
  );
}

export default App;
