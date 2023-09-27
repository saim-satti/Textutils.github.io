import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Upper case was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","sucess");
  }
  const handleLoClick = ()=>{
    console.log("Upper case was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","sucess");
  }
  const handleonchange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
 <>
 <div className="container" style={{color:props.mode==='dark'?'white':'#2b2644'}}>
    <h1 className='mb-2'>{props.heading}</h1>
   <div className="mb-3">
     
     <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#2b2644':'white', color:props.mode==='dark'?'white':'black'}} id="Mybox" rows="8"></textarea>
   </div>
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to uppercase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to lowercase</button>
</div>
<div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
</div>
</>   
  )
}
