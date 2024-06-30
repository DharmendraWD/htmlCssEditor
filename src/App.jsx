import React, { useEffect, useRef, useState } from 'react';

function HTMLDisplayEdit() {
  const [code, setCode] = useState('<p class="pa">I am para</p>');
  const [classNam, setClassNam] = useState("");
  const editableRef = useRef(null);





  // Function to handle input changes
  const handleChange = (event) => {
    setCode(event.target.value);
  };

  // Function to create a safe HTML preview
  const createMarkup = () => {
    return { __html: code };
  };
// ---------------------------------
// WHEN  SHORTCUT KEYs IS PRESSED| 
  const handleKeyPress = (event) => {
    // when alt+p is pressed 
    if (event.altKey && event.key === 'p' || event.altKey && event.key === 'P') {
      event.preventDefault(); 
      setCode(code + "<p></p>")
    }
    // when alt+d is pressed 
if (event.altKey && event.key === 'd' || event.altKey && event.key === 'D') {
      event.preventDefault(); 
        setCode(code + "<div></div>")
    }
    // when alt+s is pressed 
if (event.altKey && event.key === 's' || event.altKey && event.key === 'S') {
      event.preventDefault(); 
        setCode(code + "<span></span>")
    }
    // when alt+1 is pressed 
if ( event.altKey && event.key === '1' ) {
      event.preventDefault(); 
        setCode(code + "<h1></h1>")
  moveCursorToMiddle()
    }
  };
// css 
function handleCssChange(event){
if(event && event.target && event.target.value){
  setClassNam(event.target.value)

}
}




useEffect(() => {
handleCssChange()
  let codeTagsArray = code.match(/(<[^>]*>[^<]*<\/[^>]*>)|(<[^>]*>)/g);

    let cssClasses = classNam.split(".")
// `class="${cssClasses[1]}"`

 codeTagsArray.forEach((elem)=>{
      if(elem.includes(`class="${cssClasses[1]}"`)){
        console.log("first")
        console.log(elem)
      }
 })
}, [classNam])



  return (
    <>
      <div className="Title">
        <h3>HTML Compiler, Right Now OnlySupports Inline CSS </h3>
      </div>
    <div    ref={editableRef}>

      <textarea
        value={code}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        rows={5}
        cols={50}
      />

      {/* Preview area */}

      <div>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>


      {/* ------------ */}
      
       <div>
        {/* Textarea for CSS input */}
        <textarea
          placeholder="Write your CSS here..."
          onChange={handleCssChange}
          rows={5}
          cols={50}
        />
      </div>
    </div>
    </>
  );
}

export default HTMLDisplayEdit;
