import { useState } from "react";
import EditParagraph from "./EditParagraph";

const EditView = ({ children }) => {
  return (
    <div className="view" contentEditable={true}>
      <h1>Click here to edit Heading1</h1>
      Hallo world!
      <p>§ paragraph</p>
      <span>span</span>
    </div>
  );
};

export default EditView;
