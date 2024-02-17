import React from "react";
import SunEditor from "suneditor-react";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";
import "suneditor/dist/css/suneditor.min.css";
import {
  align,
  font,
  fontColor,
  fontSize,
  formatBlock,
  hiliteColor,
  horizontalRule,
  lineHeight,
  list,
  paragraphStyle,
  table,
  template,
  textStyle,
  image,
  link,
} from "suneditor/src/plugins";

interface PropsI extends SunEditorReactProps {}

const Editor = (props: PropsI) => {
  return (
    <SunEditor
      lang="ja"
      setOptions={{
        plugins: [
          align,
          font,
          fontColor,
          fontSize,
          formatBlock,
          hiliteColor,
          horizontalRule,
          lineHeight,
          list,
          paragraphStyle,
          table,
          template,
          textStyle,
          image,
          link,
        ],
        buttonList: [
          ["undo", "redo"],
          ["font", "fontSize", "formatBlock"],
          ["paragraphStyle"],
          ["bold", "underline", "italic", "strike", "subscript", "superscript"],
          ["fontColor", "hiliteColor"],
          ["removeFormat"],
          "/", // Line break
          ["outdent", "indent"],
          ["align", "horizontalRule", "list", "lineHeight"],
          [
            // "table",
            "link",
            // "image"
          ],
        ],
        formats: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
        font: [
          "Arial",
          "Calibri",
          "Comic Sans",
          "Courier",
          "Garamond",
          "Georgia",
          "Impact",
          "Lucida Console",
          "Palatino Linotype",
          "Segoe UI",
          "Tahoma",
          "Times New Roman",
          "Trebuchet MS",
        ],
      }}
      {...props}
    />
  );
};

export default Editor;
