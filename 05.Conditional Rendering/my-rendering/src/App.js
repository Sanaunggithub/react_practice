// conditional rendering = allows you to control what gets rendered
//                        in your application based on certain conditions
//                        (show, hide or change components)

import Usergreeting from "./Usergreeting";

function App() {
  return (
    <>
      <Usergreeting isLoggedIn = {false} userName ="San Aung"/>
    </>
  );
}

export default App;
