import io from 'socket.io-client';
import "./App.css";

const socket = io("http://localhost:4000")

function App() {
  return <div>hello world</div>;
}

export default App;
