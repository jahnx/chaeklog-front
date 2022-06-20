import styled from 'styled-components';
import IconAdd from './icons/IconAdd';
import palette from 'lib/styles/palette';
import { useState } from 'react';
import axios from '../../node_modules/axios/index';
import { useParams } from 'react-router-dom';
import EditNoteInput from './EditNoteInput';

const Note = (props) => {
  const bookId = useParams().id;
  const noteData = props.note;
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState('');
  const [sentence, setSentence] = useState('');

  const handleResizeHeight = (e) => {
    const obj = e.target;
    obj.style.height = '0px';
    obj.style.height = obj.scrollHeight + 'px';
  };

  const handleSetPage = (e) => {
    setPage(e.target.value);
  };

  const handleSetSentence = (e) => {
    setSentence(e.target.value);
  };

  const handleAddSentence = (e) => {
    const note = {
      page: page,
      sentence: sentence,
    };

    axios
      .post(`books/${bookId}/notes`, note)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

    setPage('');
    setSentence('');

    window.location.replace(`${bookId}`);
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>page</th>
            <th>sentence</th>
            <th>
              save
              <Line />
              delete
            </th>
          </tr>
        </thead>
        <tbody>
          {noteData.length >= 1 &&
            noteData.map((note) => (
              <EditNoteInput key={note.id} bookId={bookId} note={note} />
            ))}
          {visible && (
            <tr>
              <td>
                <input
                  type="text"
                  name="page"
                  id="page"
                  placeholder="1"
                  onChange={handleSetPage}
                />
              </td>
              <td>
                <textarea
                  name="page"
                  id="sentence"
                  placeholder="기억하고 싶은 문장을 기록해보세요."
                  onInput={handleResizeHeight}
                  onChange={handleSetSentence}
                />
              </td>
              <td>
                <InputBtnContainer>
                  <button onClick={handleAddSentence}>
                    <div>생성</div>
                  </button>
                  <button
                    onClick={() => {
                      setVisible(!visible);
                    }}
                  >
                    <div>취소</div>
                  </button>
                </InputBtnContainer>
              </td>
            </tr>
          )}
          <tr>
            <AddBtnWrapper colSpan={3}>
              <button
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <IconAdd size={18} />
              </button>
            </AddBtnWrapper>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Note;

Note.defaultProps = {
  note: {
    id: 1,
    page: 100,
    sentence: 'test sentence',
  },
};

const Container = styled.div`
  width: 800px;
  height: auto;
  border: 1px solid #cecece;
  border-radius: 10px;

  @media screen and (max-width: 400px) {
    width: 350px;
  }

  @media (min-width: 401px) and (max-width: 700px) {
    width: 600px;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    width: 800px;
  }
`;

const Table = styled.table`
  margin: 20px auto;
  width: 90%;

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

    @media screen and (max-width: 400px) {
      width: 350px;
      font-size: 15px;

      &:last-child {
        width: 100px;
        font-size: 12px;
      }
    }
  }
  td {
    font-size: 14px;
    height: 30px;

    &:last-child {
      width: 100px;
    }
  }

  input,
  textarea {
    border: none;
    background-color: ${palette.gray[1]};
    width: 90%;
    text-align: center;
    /* white-space: pre-line; */
  }

  input {
    height: 20px;
  }

  textarea {
    height: 20px;
    padding: 1px;
  }
`;

const Line = styled.span`
  margin: 0 5px;
  border: 1px solid black;
  height: 15px;
`;

const AddBtnWrapper = styled.td`
  /* background-color: lightgrey; */
  padding: 5px 0;
`;

const InputBtnContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4px;

  button {
    background-color: ${palette.gray[1]};
    border-radius: 5px;
    width: 40px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      margin-right: 3px;

      &:hover {
        background-color: ${palette.cyan[1]};
      }
    }

    &:last-child:hover {
      background-color: ${palette.red[1]};
    }
  }
`;
