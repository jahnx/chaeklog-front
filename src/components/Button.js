import palette from 'lib/styles/palette';
import styled, { css } from 'styled-components';

const Button = (props) => <StyledButton {...props} />;

export default Button;

const StyledButton = styled.button`
  border-radius: 5px;
  font-size: 10rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.cyan &&
    css`
    background: ${palette.cyan[5]}
    &:hover {
      background: ${palette.cyan[4]}
    }
  `}

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1rem;
    `}
`;
