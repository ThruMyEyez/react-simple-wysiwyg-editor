import EditView from "./EditView";

const Editor = () => {
  return (
    <div className="Editor">
      <div className="menu">
        {/* TODO: button components */}
        <button>Bold</button>
        <button>Italic</button>
        <button>Underline</button>
        <button>Left</button>
        <button>Right</button>
      </div>
      <EditView>{/* serve basic editable elements */}</EditView>
    </div>
  );
};
export default Editor;
