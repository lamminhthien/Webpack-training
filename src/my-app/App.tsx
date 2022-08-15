import * as React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '@/my-app/pages/home';
import Contact from '@/my-app/pages/contact';
import BlogList from '@/my-app/pages/blog/list';
import BlogDetail from '@/my-app/pages/blog/detail';

import MainMenu from '@/my-app/components/menu';
import ToTop from '@/my-app/components/to-top';
import Accordion from './components/accordion';
import { IAcordition } from './interfaces/accordition';

const App: React.FC = () => {
  var accorditionArray: IAcordition[] = [
    {id: 0, content: 'This is content for 0', title: 'This is title 0'},
    {id: 1, content: 'This is content for 1', title: 'This is title 1'},
    {id: 2, content: 'This is content for 2', title: 'This is title 2'}
  ];
  return (
    <Router>
      <MainMenu />
      <ToTop />
      <Accordion data={accorditionArray}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
