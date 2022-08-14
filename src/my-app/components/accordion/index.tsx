import * as React from 'react';
import {IAcordition} from '@/my-app/interfaces/accordition';
import './style.scss';

import * as AccorditionApi from '@/my-app/api/network/accordition';


const Accordion = () => {
  const [accorditions, setAccorditions] = React.useState<IAcordition[]>([]);

  React.useEffect(() => {
    (async () => {
      const accorditions = await AccorditionApi.find();
      setAccorditions(accorditions.data);
    })();
  
  },[]);

  const showAccorditionContent = (id: number) => {
    // Get accorditionContentElm
    var accorditionContentElm = document
      .getElementById(`${id}`)
      .querySelector('.accordition-content');
    var isOpen =
      accorditionContentElm.classList.contains('d-none') === true
        ? false
        : true;

    // Show content
    if (!isOpen) accorditionContentElm.classList.remove('d-none');
    else accorditionContentElm.classList.add('d-none');
  };

  return (
    <div className="accordition">
      {accorditions.map(accordition => {
        return (
          <div className="accordition-item" id={accordition.id.toString()}>
            <div
              className="accordition-title"
              onClick={() => showAccorditionContent(accordition.id)}
            >
              {accordition.title}
            </div>
            <div className="accordition-content d-none">
              {accordition.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
