import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 15
  });
    // Create add and remove functions here that changes the
    // state.
    const handlechange1 = (val) =>{
        if(inv.books<=0){
            return;
        }
       setInv(previousState => {
            return { ...previousState, books:inv.books+val }
        });
        console.log(inv.books+val)
     }

     const handlechange2 = (val) =>{
        if(inv.notebooks<=0){
            return;
        }
         setInv(previousState => {
             return { ...previousState, notebooks:inv.notebooks+val }
        });
        console.log(inv.notebooks+val)
     }

     const handlechange3 = (val) =>{
        if(inv.pens<=0){
            return;
        }
        setInv(previousState => {
            return { ...previousState, pens:inv.pens+val }
       });
       console.log(inv.pens+val)
    }

    const handlechange4 = (val) =>{
        if(inv.inkpens<=0){
            return;
        }
        setInv(previousState => {
            return { ...previousState, inkpens:inv.inkpens+val }
       });
       console.log(inv.inkpens+val)
    }


  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{
            handlechange1(1)
        }}>+</button>
        <button className="circlularButton"  onClick={()=>{
            handlechange1(-1)
        }}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{
            handlechange2(1)
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
            handlechange2(-1)
        }}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{
            handlechange3(1)
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
            handlechange3(-1)
        }}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton"  onClick={()=>{
            handlechange4(1)
        }}>+</button>
        <button className="circlularButton"  onClick={()=>{
            handlechange4(-1)
        }}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {0+inv.books+ inv.notebooks + inv.pens + inv.inkpens}
    </div>
  );
};
