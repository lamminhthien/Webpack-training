import * as React from "react";

import ListOfNames from "./components/list-of-names";

const App: React.FC = () => {
  const inputEl = React.useRef(null)
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div className='aaa'>
      <input type="text" ref={inputEl} />
      <button onClick={onButtonClick}></button>
      <ListOfNames title={'ABC Members'} data={['Thiện', 'Luân', 'Tuyền', 'Linh', 'Hưng', 'Huy']} />
      <ListOfNames data={['Tin', 'Khánh']} />
    </div>
  );
};

export default App;
