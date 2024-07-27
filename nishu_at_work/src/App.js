import './App.css';
// New Version no need to import React before we use to have import React from 'react'
// Componments can be imported or exported from the autofiles. 
// The purpose to make resusable components without thousands of line of imports. 
// This one is called name export
export const App=  ()=>{ // Changing it to arrow function i.e. after =, will add ()=>{// and here function definition}
// Above because export is in function we need to use import {App} from app 
// else : export 'default' (imported as 'App') was not found in './App' (possible exports: App)
  // The fucntion is fundamentally returing a JSX 
  return (
    <div className="App">
      <p>
        Using arrow function and export function 
      </p>
    </div>
  );
}
// This one is using default export and returning JSX inside using index.js 
// export can be skipped and can write in the function above so commenting below
// export default App;
