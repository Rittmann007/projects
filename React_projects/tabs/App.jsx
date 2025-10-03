import { useState, useCallback, useEffect, useRef } from "react";
import Tabs from "./Tabs";



// learn to implement custom scroll

function App() {

  const tabs = [
    {
      label: "tab1",
      content : <div>this is content for tab1</div>
    },
    {
      label: "tab2",
      content : <div>this is content for tab2</div>
    },
    {
      label: "tab3",
      content : <div>END CONTENT</div>
    }
  ]


  return (
   <>
   <Tabs contents={tabs}/>

    </>
  )
}

export default App