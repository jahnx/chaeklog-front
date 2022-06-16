import styled from 'styled-components';

const IconEdit = (props) => {
  const { size } = props;
  return (
    <StyledIcon width={size} height={size} viewBox="0 0 24 24">
      <mask
        id="path-1-outside-1_112_563"
        maskUnits="userSpaceOnUse"
        x="3"
        y="4"
        width="17"
        height="17"
      >
        <rect fill="white" x="3" y="4" width="17" height="17" />
        <path d="M13.5858 7.41421L6.39171 14.6083C6.19706 14.8029 6.09974 14.9003 6.03276 15.0186C5.96579 15.1368 5.93241 15.2704 5.86564 15.5374L5.20211 18.1915C5.11186 18.5526 5.06673 18.7331 5.16682 18.8332C5.2669 18.9333 5.44742 18.8881 5.80844 18.7979L5.80845 18.7979L8.46257 18.1344C8.72963 18.0676 8.86316 18.0342 8.98145 17.9672C9.09974 17.9003 9.19706 17.8029 9.39171 17.6083L16.5858 10.4142L16.5858 10.4142C17.2525 9.74755 17.5858 9.41421 17.5858 9C17.5858 8.58579 17.2525 8.25245 16.5858 7.58579L16.4142 7.41421C15.7475 6.74755 15.4142 6.41421 15 6.41421C14.5858 6.41421 14.2525 6.74755 13.5858 7.41421Z" />
      </mask>
      <path
        d="M6.39171 14.6083L7.5938 15.8104L7.5938 15.8104L6.39171 14.6083ZM13.5858 7.41421L12.3837 6.21213L12.3837 6.21213L13.5858 7.41421ZM16.4142 7.41421L15.2121 8.61629L15.2121 8.6163L16.4142 7.41421ZM16.5858 7.58579L17.7879 6.3837L17.7879 6.3837L16.5858 7.58579ZM16.5858 10.4142L17.7879 11.6163L17.7879 11.6163L16.5858 10.4142ZM9.39171 17.6083L8.18963 16.4062L8.18963 16.4062L9.39171 17.6083ZM5.86564 15.5374L7.51489 15.9497L7.51489 15.9497L5.86564 15.5374ZM5.20211 18.1915L3.55287 17.7792L3.55287 17.7792L5.20211 18.1915ZM5.80845 18.7979L5.39614 17.1486L5.32208 17.1672L5.24997 17.1922L5.80845 18.7979ZM8.46257 18.1344L8.05027 16.4851L8.05026 16.4851L8.46257 18.1344ZM5.16682 18.8332L6.3689 17.6311L6.3689 17.6311L5.16682 18.8332ZM5.80844 18.7979L6.22075 20.4471L6.29482 20.4286L6.36693 20.4035L5.80844 18.7979ZM8.98145 17.9672L8.14386 16.4879L8.14386 16.4879L8.98145 17.9672ZM16.5858 10.4142L17.7879 11.6163L17.7879 11.6163L16.5858 10.4142ZM6.03276 15.0186L4.55342 14.181L4.55342 14.181L6.03276 15.0186ZM7.5938 15.8104L14.7879 8.61629L12.3837 6.21213L5.18963 13.4062L7.5938 15.8104ZM15.2121 8.6163L15.3837 8.78787L17.7879 6.3837L17.6163 6.21213L15.2121 8.6163ZM15.3837 9.21213L8.18963 16.4062L10.5938 18.8104L17.7879 11.6163L15.3837 9.21213ZM4.2164 15.1251L3.55287 17.7792L6.85136 18.6039L7.51489 15.9497L4.2164 15.1251ZM6.22076 20.4471L8.87488 19.7836L8.05026 16.4851L5.39614 17.1486L6.22076 20.4471ZM3.55287 17.7792C3.5216 17.9043 3.44644 18.1863 3.42116 18.4447C3.39382 18.7242 3.37284 19.4434 3.96474 20.0353L6.3689 17.6311C6.59097 17.8532 6.71815 18.1171 6.77409 18.3601C6.82271 18.5713 6.80941 18.7307 6.80501 18.7757C6.80015 18.8253 6.79409 18.8433 6.80412 18.7981C6.81354 18.7557 6.82713 18.7008 6.85136 18.6039L3.55287 17.7792ZM5.24997 17.1922L5.24996 17.1922L6.36693 20.4035L6.36694 20.4035L5.24997 17.1922ZM5.39614 17.1486C5.29924 17.1729 5.24435 17.1865 5.20189 17.1959C5.15666 17.2059 5.17465 17.1998 5.22427 17.195C5.26931 17.1906 5.42867 17.1773 5.63988 17.2259C5.8829 17.2819 6.14683 17.409 6.3689 17.6311L3.96473 20.0353C4.55662 20.6272 5.27584 20.6062 5.55528 20.5788C5.81371 20.5536 6.09568 20.4784 6.22075 20.4471L5.39614 17.1486ZM8.18963 16.4062C8.13916 16.4567 8.10344 16.4924 8.07281 16.5224C8.04249 16.552 8.02767 16.5658 8.02147 16.5714C8.01614 16.5761 8.02653 16.5664 8.04857 16.5499C8.07251 16.532 8.1048 16.51 8.14386 16.4879L9.81903 19.4466C10.1845 19.2396 10.463 18.9412 10.5938 18.8104L8.18963 16.4062ZM8.87488 19.7836C9.05438 19.7387 9.45353 19.6535 9.81904 19.4466L8.14386 16.4879C8.18292 16.4658 8.21835 16.4494 8.24605 16.4381C8.27156 16.4277 8.28525 16.4238 8.27839 16.4259C8.27043 16.4283 8.25103 16.434 8.20997 16.4447C8.1685 16.4555 8.11952 16.4678 8.05027 16.4851L8.87488 19.7836ZM15.3837 8.78787C15.5548 8.959 15.6841 9.0884 15.7913 9.20113C15.899 9.31448 15.9552 9.38065 15.9842 9.41875C16.0126 9.45597 15.9865 9.42964 15.9543 9.35235C15.9164 9.26152 15.8858 9.13834 15.8858 9H19.2858C19.2858 8.27174 18.9694 7.72604 18.6873 7.35637C18.4352 7.02594 18.0872 6.68305 17.7879 6.3837L15.3837 8.78787ZM17.7879 11.6163L17.7879 11.6163L15.3837 9.21213L15.3837 9.21213L17.7879 11.6163ZM17.7879 11.6163C18.0872 11.3169 18.4352 10.9741 18.6873 10.6436C18.9694 10.274 19.2858 9.72825 19.2858 9H15.8858C15.8858 8.86166 15.9164 8.73849 15.9543 8.64765C15.9865 8.57036 16.0126 8.54403 15.9843 8.58125C15.9552 8.61934 15.899 8.68552 15.7913 8.79886C15.6841 8.91159 15.5548 9.04099 15.3837 9.21213L17.7879 11.6163ZM14.7879 8.61629C14.959 8.44516 15.0884 8.31592 15.2011 8.20874C15.3145 8.10097 15.3807 8.04482 15.4188 8.01575C15.456 7.98735 15.4296 8.01352 15.3524 8.04575C15.2615 8.08363 15.1383 8.11421 15 8.11421V4.71421C14.2717 4.71421 13.726 5.03063 13.3564 5.31268C13.0259 5.56479 12.6831 5.91278 12.3837 6.21213L14.7879 8.61629ZM17.6163 6.21213C17.3169 5.91278 16.9741 5.56479 16.6436 5.31268C16.274 5.03063 15.7283 4.71421 15 4.71421V8.11421C14.8617 8.11421 14.7385 8.08363 14.6476 8.04575C14.5704 8.01352 14.544 7.98735 14.5812 8.01575C14.6193 8.04482 14.6855 8.10097 14.7989 8.20874C14.9116 8.31592 15.041 8.44516 15.2121 8.61629L17.6163 6.21213ZM5.18963 13.4062C5.0588 13.537 4.76037 13.8155 4.55342 14.181L7.5121 15.8561C7.48999 15.8952 7.46804 15.9275 7.4501 15.9514C7.43358 15.9735 7.42385 15.9839 7.42865 15.9785C7.43422 15.9723 7.44795 15.9575 7.47764 15.9272C7.50763 15.8966 7.54332 15.8608 7.5938 15.8104L5.18963 13.4062ZM7.51489 15.9497C7.5322 15.8805 7.54446 15.8315 7.5553 15.79C7.56603 15.749 7.57167 15.7296 7.57412 15.7216C7.57622 15.7148 7.57231 15.7284 7.56191 15.7539C7.55061 15.7816 7.53422 15.8171 7.5121 15.8561L4.55342 14.181C4.34648 14.5465 4.26128 14.9456 4.2164 15.1251L7.51489 15.9497Z"
        mask="url(#path-1-outside-1_112_563)"
      />
      <line
        x1="12.0979"
        y1="8.07926"
        x2="16.0329"
        y2="12.0143"
        strokeWidth="1.3"
        stroke="black"
      />
    </StyledIcon>
  );
};

export default IconEdit;

const StyledIcon = styled.svg`
  fill: black;
`;