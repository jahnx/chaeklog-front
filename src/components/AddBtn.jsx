import IconAdd from 'components/icons/IconAdd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddBtn = (props) => {
  return (
    <Link to="/search">
      <Container>
        <div>
          <IconAdd size={18} />
          <span>{props.text}</span>
        </div>
      </Container>
    </Link>
  );
};

export default AddBtn;

const Container = styled.div`
  margin: 20px 0;
  display: flex;

  div {
    width: 90px;
    display: flex;
    flexbox: center;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
  }

  span {
    font-size: 16px;
  }
`;
