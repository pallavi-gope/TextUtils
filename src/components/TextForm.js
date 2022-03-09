import React, {useState} from 'react'

export default function TexthtmlForm(props) {
const [text, setText] = useState('');
const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase', 'success');
}
const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase', 'success');
}
const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert('Text Cleared', 'success');
}
const handleCopy = ()=>{
    let text = document.getElementById('mypops');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text Copied', 'success');
}
const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Removed Extra Spaces', 'success');
}
const handleOnChange = (event)=>{
    setText(event.target.value);
}
  return (
      <>
    <div className="container" style={{ color: (props.mode === 'dark') ? 'white' : '#053452' }}>      
        <h3 className='my-4 heading'>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" name="mypops" id="mypops" style={{ backgroundColor: (props.mode === 'dark') ? 'grey' : 'white', color: (props.mode === 'dark') ? 'white' : '#053452' }} onChange={handleOnChange} value={text} rows="10"></textarea>
        </div>
        <div className="mb-3">
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>            
        </div>
    </div>
    <div className="container my-3" style={{ color: (props.mode === 'dark') ? 'white' : '#053452' }}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(' ').length} Minutes Read</p>
        <h3>Preview</h3>
        <div>{text.length > 0 ? text : 'Enter Something Into Above Textbox to Preview...'}</div>
    </div>
    </>
  )
}
