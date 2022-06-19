import IconSave from './icons/IconSave';
import IconDelete from './icons/IconDelete';
import styled from 'styled-components';
import { useState } from 'react';
import axios from '../../node_modules/axios/index';

const EditNoteInput = (props) => {
  const bookId = props.bookId;
  const note = props.note;

  const [page, setPage] = useState(note.page);
  const [sentence, setSentence] = useState(note.sentence);
  const [editable, setEditable] = useState(false);

  const editOn = () => {
    setEditable(true);
  };

  const handleKeyDown = (e, noteId) => {
    if (e.key === 'Enter') {
      console.log(page, sentence);
      handleEditNote(noteId);
      setEditable(!editable);
    }
  };

  const onChangePage = (e) => {
    setPage(e.target.value);
  };

  const onChangeSentence = (e) => {
    setSentence(e.target.value);
  };

  const handleEditNote = (noteId) => {
    let body = {
      page: page,
      sentence: sentence,
    };
    axios
      .patch(`books/${bookId}/notes/${noteId}`, body)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    window.location.replace(`${bookId}`);
  };

  const handleDeleteNote = (noteId) => {
    axios
      .delete(`books/${bookId}/notes/${noteId}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    window.location.replace(`${bookId}`);
  };

  return (
    <>
      <tr>
        <td>
          {editable ? (
            <input
              type="text"
              value={page}
              onChange={onChangePage}
              onKeyDown={(e) => handleKeyDown(e, note.id)}
            />
          ) : (
            <div onClick={(e) => editOn(e)}>p.{note.page}</div>
          )}
        </td>
        <td>
          {editable ? (
            <input
              type="text"
              value={sentence}
              onChange={onChangeSentence}
              onKeyDown={(e) => handleKeyDown(e, note.id)}
            />
          ) : (
            <SentenceContainer onClick={(e) => editOn(e)}>
              {note.sentence}
            </SentenceContainer>
          )}
        </td>
        <td>
          <BtnContainer>
            <button
              onClick={() => {
                handleEditNote(note.id);
              }}
            >
              <IconSave size={18} />
            </button>
            <Line />
            <button
              onClick={() => {
                handleDeleteNote(note.id);
              }}
            >
              <IconDelete size={18} />
            </button>
          </BtnContainer>
        </td>
      </tr>
    </>
  );
};

export default EditNoteInput;

const SentenceContainer = styled.div`
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto auto auto 21px;
`;

const Line = styled.span`
  margin: 0 5px;
  border: 1px solid black;
  height: 15px;
`;
