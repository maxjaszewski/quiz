import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-text';


function Ide() {
  const [language, setLanguage] = useState('text');

  const onChange = (newValue) => {
    console.log('change', newValue);
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  }

  return (
    <div>
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
      />
    </div>
  );
}

export default Ide;