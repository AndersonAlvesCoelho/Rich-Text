import React, { useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function RechText(props) {
  const { typeModelo } = props;

  const [dataText, setDataText] = useState("...");
  
  return (
    <CKEditor
      editor={ClassicEditor}
      onChange={(event, editor) => {
        setDataText(editor.getData());
      }}
      data={typeModelo ? typeModelo : dataText}
    />
  );
}

export default RechText;
