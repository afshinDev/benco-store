import styled from "styled-components";

const MessageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25.6vh;
  font-size: 2rem;
  text-transform: capitalize;
  animation: ease infinite 1000ms shadow;
`;

const Message = ({ children }) => {
  return <MessageStyle>{children}...</MessageStyle>;
};
export default Message;
