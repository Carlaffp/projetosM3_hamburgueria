

import { Toaster } from "react-hot-toast";
import { Feed } from "./pages/Feed";
import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/globalStyles";


function App() {
  

  return (
    <div className="App">
      <GlobalReset/>
      <GlobalStyles/>
      <Feed></Feed>
      <Toaster/>
    </div>
  );
}

export default App;
