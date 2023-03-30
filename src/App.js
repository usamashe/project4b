import {
  AniImage,
  NavBar,
  Ux,
  About,
  ChatBot,
  CaseStudies,
  Footer,
} from "./components/components";
import "./App.module.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AniImage />
      <Ux />
      <About />
      <ChatBot />
      <CaseStudies />
      <Footer />
    </div>
  );
}

export default App;
