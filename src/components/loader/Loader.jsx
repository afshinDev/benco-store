import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  height: ${(props) => props.height};
`;

const LoaderSpinner = styled.div`
  width: 8rem;
  height: 8rem;
  border: 1rem solid var(--text-0);
  border-bottom-color: var(--primary);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(-360deg);
    }
  }
`;

const Loader = ({ height }) => {
  return (
    <LoaderContainer className="center" height={height}>
      <LoaderSpinner />
    </LoaderContainer>
  );
};
export default Loader;
