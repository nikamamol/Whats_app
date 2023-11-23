import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ConctlistComponenent";
const Container = styled.div`
display:flex;
flex-direction: column;
height:100%;
width: 100%;
flex:2;
background:#FFC0CB;

`;

const ProfileHeader = styled.div`
display:flex;
flex-direction:row;
background-color:#f6f7f8;
padding:10px;
align-item:center;
gap:10px;
`;


const ProfileImg = styled.img`
width:32px;
height:32px;
border-radius:50%;

`;

const ChatBox = styled.div`
display:flex;
background:#fefefe;
padding:10px;
align-item:center;
bottom:0;
opacity:0.4;
cursor:pointer;
`;

const EmojiImage = styled.img`
width:30px;
height:28px;

`;

const MessageContainer = styled.div`
display:flex;
flex-direction:column;
height:100%;
`;

const MessageDiv = styled.div`
display:flex;

justify-content: ${props => props.isYours ? "flex-end" : "flex - start"};
margin:5px 10px;

`;

const Message = styled.div`
background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
border-radius:20px;
max-width:50%;
color: #303030;
padding: 8px 10px;
font-size: 19px;
`;
const ConversationComponenet = () => {
    return (
        <Container>
            <ProfileHeader >
                <ProfileImg src="/profile/pp2.png" />
                Amol Patil
            </ProfileHeader>
            <MessageContainer isYours={true}>
                <MessageDiv isYours={true}>
                    <Message>Hello How Are You ?</Message>
                </MessageDiv>
                <MessageDiv isYours={false}>
                    <Message>I am Fine.</Message>
                </MessageDiv>
                <MessageDiv isYours={false}>
                    <Message>How About You?</Message>
                </MessageDiv>
            </MessageContainer>
            <ChatBox>
                <SearchContainer>
                    <EmojiImage src="/profile/data.svg" />
                    <SearchInput placeholder="Type a message...." />
                </SearchContainer>
            </ChatBox>
        </Container>
    )
}

export default ConversationComponenet;

























// import styled from "styled-components";
// import { messagesList } from "../Data";
// import { SearchContainer, SearchInput } from "./ContactListComponents";
// const Container = styled.div`
// display: flex ;
// flex-direction: column;
// height: 100%;
// flex: 2;
// background: #f6f7f8;
// `;
// const ProfileHeader = styled.div`
//     display: flex;
//     flex-direction: row;
//     background: #ededed;
//     padding: 15px;
//     align-items: center;
//     gap : 10px;
// `;

// const ProfileImage = styled.img`
// width: 40px;
// height: 40px;
// border-radius: 50%;
// `;

// const ChatBox = styled.div`
// display: flex;
// background: #f0f0f0;
// padding: 10px;
// align-items: center;
// bottom : 0;
// `;

// const EmojiImage = styled.img`
// width:30px;
// height: 28px;
// opacity: 0.4;
// cursor: pointer;
// `;
// const MessageContainer = styled.div`
// display: flex;
// flex-direction: column;
// height: 100%;
// background: #e5ddd6;
// `;

// const MessageDiv = styled.div`
// justify-content: ${(props) => (props.isYours ? 'flex-end' : 'flex-start')};
// display:flex;
// margin: 5px 16px;
// `;

// const Message = styled.div`
// background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
// max-width:50%;
// color: #303030;
// padding: 8px 10px;
// font-size: 19px;
// `;

// const ConversationComponent = () => {
//     return (
//         <Container>
//             <ProfileHeader>
//                 <ProfileImage src="/profile/IMG_3464.jpg" />
//                 Anubhav Sharma
//             </ProfileHeader>
//             <MessageContainer>
//                 {messagesList.map((messageData) => (
//                     <MessageDiv isYours={messageData.senderID === 0}>
//                         <Message isYours={messageData.senderID === 0}>{[messageData.text]} </Message>
//                     </MessageDiv>
//                 ))}

//             </MessageContainer>
//             <ChatBox>
//                 <SearchContainer>
//                     <EmojiImage src={"/data.svg"} />
//                     <SearchInput placeholder="Type a message" />
//                 </SearchContainer>
//             </ChatBox>
//         </Container>
//     );
// };
// export default ConversationComponent;