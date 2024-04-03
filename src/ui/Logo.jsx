import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const LogoStyle = styled(NavLink)`
  font-size: ${(props) => props.size};

  ${(props) =>
    props.type === "header" &&
    css`
      color: var(--primary);
      font-family: var(--font-semibold);
    `}

  ${(props) =>
    props.type === "footer" &&
    css`
      color: #ffffffff;
      font-family: var(--font-medium);
    `}
`;

const Logo = ({ size, type }) => {
  return (
    <LogoStyle to={"/"} size={size} type={type}>
      BenCo. Store
    </LogoStyle>
  );
};
export default Logo;
