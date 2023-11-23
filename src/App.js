import styled from "styled-components"
import ContactListComponenet from "./components/ConctlistComponenent";
import ConversationComponenet from "./components/ConventionComponenet";

function App() {

  const Container = styled.div`
  display:flex;
  flext-direction:row;
  height:100vh;
  width:100%;
  background:#f8&f9fb`
  return (
    <Container>
      <ContactListComponenet />
      <ConversationComponenet />
    
    </Container>


  );
}

export default App;
