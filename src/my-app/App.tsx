import * as React from "react";

import ListOfNames from "./components/list-of-names";

const App: React.FC = () => {
  return (
    <div className='aaa'>
      <ListOfNames title={'ABC Members'} data={['Thiện', 'Luân', 'Tuyền', 'Linh', 'Hưng', 'Huy']} />
      <ListOfNames data={['Tin', 'Khánh']} />
    </div>
  );
};

export default App;
