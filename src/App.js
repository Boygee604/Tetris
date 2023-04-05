import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/email" element={
          <p>You can reach me at <a href="mailto:boygee604@gmail.com">boygee604@gmail.com</a>.</p>
        }/>
        <Route path="/" element={
          <div>
            <body>
              <h2 class="home">HOME</h2>
              <a href="/Multiplayer"><div class="multiplayer"><h1>MULTIPLAYER</h1>
              <h4>PLAY WITH ONLINE WITH FRIENDS AND FOES</h4></div></a>
              <a href="/Solo"><div class="solo"><h1>SOLO</h1>
              <h4>CHALLENGE YOURSELF AND TOP THE LEADERBOARDS</h4></div></a>
              <a href="/Tetra"><div class="tetra"><h1>TETRA CHANNEL</h1>
              <h4>LEADERBOARDS, REPLAYS AND MORE</h4></div></a>
              <a href="/Config"><div class="config"><h1>CONFIG</h1>
              <h4>TWEAK YOUR TETR.IO EXPERIENCE</h4></div></a>
              <a href="About"><div  class="about"><h1>ABOUT</h1>
              <h4>ALL ABOUT TETR.IO</h4></div></a>
              <h3 class="welcome">WELCOME TO TETR.IO!</h3>
            </body>
          </div>
        }></Route>
        <Route path="/Multiplayer" element={<a href="/">Home</a>}></Route>
        <Route path="/Solo" element={<a href="/">Home</a>}></Route>
        <Route path="/Tetra" element={<a href="/">Home</a>}></Route>
        <Route path="/Config" element={<a href="/">Home</a>}></Route>
        <Route path="/About" element={<a href="/">Home</a>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
