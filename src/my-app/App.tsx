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

import * as AccorditionApi from '@/my-app/api/network/accordition';


const App: React.FC = () => {
  const [accordions, setArcordions] = React.useState<IAcordition[]>();
  React.useEffect(() => {
    (async () => {
      const accordions = await AccorditionApi.find();
      setArcordions(accordions.data);
    })();
  }, []);

  if (!accordions) return null;
  
  return (
    <Router>
      <MainMenu />
      <ToTop />
      <Accordion data={accordions}/>
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
