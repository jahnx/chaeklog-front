import styled from 'styled-components';

const IconSave = (props) => {
  const { size } = props;
  return (
    <StyledIcon width={size} height={size} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5786 4.00664C16.5 4.00067 16.3906 4.00001 16.1716 4.00001H9C7.55752 4.00001 6.57626 4.00213 5.84144 4.10092C5.13538 4.19585 4.80836 4.36322 4.58579 4.58579C4.36322 4.80836 4.19585 5.13539 4.10092 5.84144C4.00213 6.57626 4 7.55752 4 9.00001V15C4 16.4425 4.00213 17.4238 4.10092 18.1586C4.19585 18.8646 4.36322 19.1917 4.58579 19.4142C4.80836 19.6368 5.13538 19.8042 5.84144 19.8991C5.89305 19.906 5.94588 19.9125 6 19.9185V19L6 18.9342C5.99995 18.0477 5.99991 17.2839 6.08214 16.6722C6.17027 16.0167 6.36902 15.3883 6.87868 14.8787C7.38834 14.369 8.01669 14.1703 8.67221 14.0821C9.28387 13.9999 10.0477 13.9999 10.9342 14L11 14H12L12.0658 14C12.9523 13.9999 13.7161 13.9999 14.3278 14.0821C14.9833 14.1703 15.6117 14.369 16.1213 14.8787C16.631 15.3883 16.8297 16.0167 16.9179 16.6722C17.0001 17.2839 17.0001 18.0477 17 18.9342L17 19V19.9823C17.4489 19.9683 17.8286 19.9435 18.1586 19.8991C18.8646 19.8042 19.1916 19.6368 19.4142 19.4142C19.6368 19.1917 19.8042 18.8646 19.8991 18.1586C19.9979 17.4238 20 16.4425 20 15V7.82843C20 7.60941 19.9993 7.50004 19.9934 7.42142L19.993 7.41711L19.9902 7.41382C19.9389 7.354 19.862 7.2762 19.7071 7.12133L16.8787 4.2929C16.7238 4.13803 16.646 4.06116 16.5862 4.00979L16.5829 4.00698L16.5786 4.00664ZM15 20L15 19C15 18.0289 14.9979 17.4012 14.9357 16.9387C14.8774 16.505 14.7832 16.369 14.7071 16.2929C14.631 16.2168 14.495 16.1226 14.0613 16.0643C13.5988 16.0021 12.9711 16 12 16H11C10.0289 16 9.40121 16.0021 8.9387 16.0643C8.50496 16.1226 8.36902 16.2168 8.29289 16.2929C8.21677 16.369 8.12262 16.505 8.06431 16.9387C8.00212 17.4012 8 18.0289 8 19V19.9981C8.30668 19.9999 8.63889 20 9 20H15ZM16.2564 1.99975C16.5728 1.99836 16.9753 1.99658 17.3512 2.15225C17.727 2.30792 18.0104 2.59382 18.2331 2.81856L18.2929 2.87869L21.1213 5.70711L21.1815 5.76689C21.4062 5.98964 21.6921 6.27304 21.8478 6.64885C22.0034 7.02467 22.0017 7.42723 22.0003 7.74365L22 7.82843V15V15.0706V15.0706V15.0706C22 16.4247 22.0001 17.5413 21.8813 18.4251C21.7565 19.3529 21.4845 20.1723 20.8284 20.8284C20.1723 21.4845 19.3529 21.7565 18.4251 21.8813C17.5413 22.0001 16.4247 22 15.0706 22H15.0706H15.0705H15H9H8.92946H8.92944H8.92942C7.5753 22 6.45869 22.0001 5.57494 21.8813C4.64711 21.7565 3.82769 21.4845 3.17158 20.8284C2.51547 20.1723 2.2435 19.3529 2.11876 18.4251C1.99994 17.5413 1.99997 16.4247 2 15.0706V15.0706V15.0706L2 15V9.00001L2 8.92944V8.9294V8.92937C1.99997 7.57528 1.99994 6.45869 2.11876 5.57494C2.2435 4.64711 2.51547 3.82769 3.17158 3.17158C3.82769 2.51547 4.64711 2.2435 5.57494 2.11876C6.4587 1.99994 7.57531 1.99997 8.92943 2.00001L8.92943 2.00001L9 2.00001H16.1716L16.2564 1.99975ZM6 8.00001C6 7.44772 6.44772 7.00001 7 7.00001H12C12.5523 7.00001 13 7.44772 13 8.00001C13 8.55229 12.5523 9.00001 12 9.00001H7C6.44772 9.00001 6 8.55229 6 8.00001Z"
        fill="black"
      />
    </StyledIcon>
  );
};

export default IconSave;

const StyledIcon = styled.svg`
  fill: black;
`;