import "./App.css";
import UserLoggin from "./components/UserLoggin";
import SendMessage from "./components/SendMessage";
import Transaction from "./components/Transaction";
import MessageList from "./components/MessageList";

function App() {
  return (
    <div className="App">
      <UserLoggin />
      <Transaction />

      <SendMessage />
      <MessageList />
    </div>
  );
}

export default App;
