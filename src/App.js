// import logo from './logo.svg';
import { useEffect, useState } from 'react';
// import Header from './component/content/header/header';
import Content from './component/content/content/content';
import './App.css';
import AddTask from './component/content/addtask/AddTask';


function App() {
//var searchText="Hai"
  const [searchText,setSearchText]=useState(null)
  // eslint-disable-next-line
  const handleInput=(event)=>{
      setSearchText(event.target.value)
    //searchText=event.target.value
    console.log(searchText)
  }
  useEffect(()=>{console.log(searchText)},[searchText])
  return (
    <>
   
{/*<input type='text' onChange={handleInput}></input> */}
   <AddTask/>
   <Content/>
   <header/>
   </>
  );
}

export default App;
