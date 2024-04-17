import Header from '../components/header';
import Footer from '../components/footer';
import Not from '../components/note';


import Area from '../components/createnotes.jsx';
import { useState } from 'react';





function App() {

  const [items,setitems]=useState([])

  function createNote(input_note){
    setitems(prevİtems=>{
      return [...prevİtems,input_note]
    })

  }

  function Delete_note(id){
    setitems(prevİtems =>{
      return prevİtems.filter((items,index)=>{
        return index !==id
        
      });
    });

  }




  return (
    <div>

    <Header  />
    <Area
    onAdd={createNote}
     />

    {items.map((Noteİtem,index) =>(

      <Not
      key={index}
      id={index}
      title={Noteİtem.title} 
      content={Noteİtem.content}
      onClick={Delete_note}
      
      />
    ))}
  
    <Footer />
    </div>
  );
}

export default App;