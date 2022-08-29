
import React ,{ useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
  }
  const handleLoClick= ()=>{
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleChangeFont= ()=>{
    let font = document.getElementById('myBox');
    // let newText = font.style.color = 'red';
   font.style.fontFamily = 'Crimson Text';
   let newText = font.value;
   setText(newText);
  }
  const handleClear= ()=>{
   let newText ='';
   setText(newText);
  }

  const[text,setText]=useState("");
  let arr = text.split(" ");
  
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'? 'white': 'black'}}>  
    <div className="mb-3" > 
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{background:props.mode==='dark'? '#042743': 'white', color:props.mode==='dark'? 'white': 'black'}} ></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleChangeFont}>Change Font</button>
    <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
</div>
    <div className="container my-3" style={{color:props.mode==='dark'? 'white': 'black'}}>
      <h3>Your text summary</h3>
      <p> {arr.filter(word => word !== '').length} words and {text.length} characters</p>
      <p>{0.008*arr.filter(word => word !== '').length} minutes</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>

  )
}
