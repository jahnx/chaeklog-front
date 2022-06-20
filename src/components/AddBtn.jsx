import IconAdd from 'components/icons/IconAdd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddBtn = (props) => {
  return (
    <Link to={props.api}>
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
  /* background-color: pink; */

  div {
    /* background-color: white; */
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

  @media screen and (max-width: 400px) {
    width: 400px;
  }

  @media (min-width: 401px) and (max-width: 700px) {
    width: 700px;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    width: 1000px;
  }
`;
