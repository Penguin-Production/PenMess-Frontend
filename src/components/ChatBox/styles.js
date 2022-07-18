import styled from "styled-components";

export const WrappedChatBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 5px;
  margin-bottom: 3px;
  justify-content: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
  /* background-color: ${(props) => (props.isSender ? "cyan" : "gray")}; */
  color: ${(props) => (props.isSender ? "white" : "black")};
`;

export const MessageBox = styled.div`
  color: ${(props) => (props.isSender ? "white" : "black")};
  background-color: ${(props) => (props.isSender ? "#0d6efd" : "#0dcaf0")};
`;
