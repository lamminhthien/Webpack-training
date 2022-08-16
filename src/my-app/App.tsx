import * as React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '@/my-app/pages/home';
import Contact from '@/my-app/pages/contact';
import BlogList from '@/my-app/pages/blog/list';
import BlogDetail from '@/my-app/pages/blog/detail';

import MainMenu from '@/my-app/components/menu';
import ToTop from '@/my-app/components/to-top';
import Accordion from './components/accordion';
import ReactQueryTest from './components/react-query-test';

import { IAcordition } from './interfaces/accordition';

import * as AccorditionApi from '@/my-app/api/network/accordition';
import Tab from './components/tab';


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
      <h1>This is Accordion Component</h1>
      <Accordion data={accordions}/>
      <h1>This is Tab Component</h1>
      <Tab data={accordions}/>
      <h1>This is React Query Component</h1>
      <ReactQueryTest/>
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
