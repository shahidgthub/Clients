"use client"
import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Texteditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className="App">
      {/* <header className="App-header">Rich Text Editor Example</header> */}

      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
    </div>
  );
}

export default Texteditor;
