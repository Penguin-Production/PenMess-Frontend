import React, { useRef } from "react";

const ReceiverBox = (props) => {
  const chatBox = useRef(null);
  const { receiver, selected, current, selectReceiver } = props;

  if (chatBox.current !== null) {
    if (current === selected) {
      chatBox.current?.classList.add("active");
    } else {
      chatBox.current?.classList.remove("active");
    }
  }
  return (
    <div
      ref={chatBox}
      className="container receiver-box container mb-3 p-3"
      onClick={() => selectReceiver(selected)}
    >
      <p className="h5">{receiver}</p>
    </div>
  );
};

export default ReceiverBox;
