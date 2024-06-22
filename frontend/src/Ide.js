import React, { useState } from 'react';
import AceEditor from 'react-ace';
import ace from 'ace-builds';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-text';

// Set the worker path to a CDN
ace.config.set('workerPath', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/');


function Ide() {
  const [language, setLanguage] = useState('text');

  const onChange = (newValue) => {
    console.log('change', newValue);
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  }

  return (
    <div style={{outline: "white"}}>
      <select value={language} onChange={handleLanguageChange}>
        <option value="text">text</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
      <AceEditor
        mode={language}
        theme="monokai"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        wrapEnabled={true} // Add this line to enable wrapping
        wrapLimit={80} // Add this line to set the wrap limit to 80 characters
        height="250px"
      />
    </div>
  );
}

export default Ide;