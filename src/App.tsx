import * as React from "react";
import { AppContainer } from "./styles";

const App= () => {
  console.log(typeof children);
  return (
    <AppContainer>
      <p>{JSON.stringify(typeof children)}</p>
      Columns here t
      {/* {children} */}
    </AppContainer>
  );
};

export default App;
