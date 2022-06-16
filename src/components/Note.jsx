import styled from 'styled-components';
import IconEdit from './icons/IconEdit';
import IconDelete from './icons/IconDelete';

const Note = (props) => {
  const { id, page, sentence } = props;
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>page</th>
            <th>sentence</th>
            <th>
              edit
              <Line />
              delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>p.{page}</td>
            <td>
              <SentenceContainer>{sentence}</SentenceContainer>
            </td>
            <td>
              <BtnContainer>
                <button
                  onClick={() => {
                    console.log(`Edit ${id}`);
                  }}
                >
                  <IconEdit size={18} />
                </button>
                <Line />
                <button
                  onClick={() => {
                    console.log(`Delete ${id}`);
                  }}
                >
                  <IconDelete size={18} />
                </button>
              </BtnContainer>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Note;

Note.defaultProps = {
  id: 1,
  page: 100,
  sentence: 'test sentence',
};

const Container = styled.div`
  width: 800px;
  height: auto;
  border: 1px solid #cecece;
`;

const Table = styled.table`
  margin: 20px auto;
  width: 700px;

  th,
  td {
    text-align: center;
    vertical-align: middle;
  }

  th {
    height: 40px;
    font-size: 18px;
    border-bottom: 2px dashed black;

    &:first-child {
      width: 100px;
    }

    &:last-child {
      width: 100px;
      font-size: 14px;
    }
  }
  td {
    font-size: 14px;

    &:last-child {
      width: 100px;
    }
  }
`;

const SentenceContainer = styled.div`
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto auto auto 18px;
`;

const Line = styled.span`
  margin: 0 5px;
  border: 1px solid black;
  height: 15px;
`;
