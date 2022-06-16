import styled from 'styled-components';

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>{children}</WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;

const AuthTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const WhiteBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  background: white;
  width: 360px;
  padding: 5rem;
  border-radius: 10px;
  margin-top: 15rem;
`;
