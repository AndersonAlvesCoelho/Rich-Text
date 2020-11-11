import React, { useState } from 'react';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function RechText() {
  const [dataText, setDataText] = useState("<p>Hello from CKEditor 5!</p>");

  console.log(dataText);

  return (
    <div className="App">
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          setDataText(editor.getData());
        }}
        data={dataText}
      />
    </div>
  );
}

export default RechText;
