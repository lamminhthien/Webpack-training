import * as React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '@/my-app/pages/home';
import Contact from '@/my-app/pages/contact';
import BlogList from '@/my-app/pages/blog/list';
import BlogDetail from '@/my-app/pages/blog/detail';

import MainMenu from '@/my-app/components/menu';
import ToTop from '@/my-app/components/to-top';

const App: React.FC = () => {
  return (
    <Router>
      <MainMenu />
      <ToTop />
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
