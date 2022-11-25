import Homepage from './Components/Homepage';
import { AuthContextProvider } from './Context/Authcontext';
import { ChatContextProvider } from './Context/Chatcontext';


function App() {
  return (
          <div className="App">
            <AuthContextProvider>
              <ChatContextProvider>
                <Homepage />
              </ChatContextProvider>
            </AuthContextProvider>
          </div>
  ); 
}

export default App;