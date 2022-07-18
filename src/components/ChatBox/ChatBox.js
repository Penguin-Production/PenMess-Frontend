import React, { Children } from "react";
import { MessageBox, WrappedChatBox } from "./styles";
import PropsTypes from "prop-types";

const BoxWrapper = (Wrapper, props) => {
  const { children, ...res } = props;
  return <Wrapper {...res}>{children}</Wrapper>;
};

const BaseChatBox = (props) => BoxWrapper(WrappedChatBox, props);

BaseChatBox.propTypes = {
  isSender: PropsTypes.bool,
};

const ChatBox = (props) => {
  const { message } = props;
  return (
    // TODO: delete default value isSender
    <BaseChatBox isSender={message.isSender}>
      <MessageBox isSender={message.isSender} className="p-2 rounded-3">
        {message.text}
      </MessageBox>
    </BaseChatBox>
  );
};

export default ChatBox;
