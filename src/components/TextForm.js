import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnCahnge = (event)=>{
        //console.log("On change")
        setText(event.target.value)
    }
    const handleClearClick = ()=>{
        //console.log("Uppercase was clicked" + text)
        let newText = '';
        setText(newText)
    }
    const [text, setText] = useState('Enter text here');
    // text = "new text" //wrong way to change the state
    // setText("new text") //Correct way to change the state
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea name="form-control" value={text} onChange={handleOnCahnge} id="myBox" cols ="100" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>

    </div>
    <div className="container my-3">
        <h2>Your text summery</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
