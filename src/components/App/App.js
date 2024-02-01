import ProseMirrorEditor from '../Prosemirror/Prosemirror';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import './App.css';
import { Container } from "@mui/material";


function App() {
  const content = '';


  return (
    <Container style={{ display: 'flex', flexDirection: 'column', maxHeight: '100vh' }}>

            <div className="center-container">
            <Menu/>
              <ProseMirrorEditor content={content} />
            <Footer/>
          </div>
      </Container>

  );
}

export default App;
