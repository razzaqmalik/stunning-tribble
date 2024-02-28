import styled from 'styled-components'

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function App() {
  return (
   <MainContainer>
     <FaFacebookF />
     <FaInstagram />
     <FaXTwitter />
   </MainContainer>
  );
}

const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 80vh;
width: 30vh;
background: rgba(255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #fff;
text-transform: uppercase;
letter-spacing: 0.4rem;
`;

export default App;
