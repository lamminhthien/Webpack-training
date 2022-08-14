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
  }, []);

  const showAccordionContent = (id: number) => {
    var accorElm = document.getElementById(`accor-${id}`);
    var accorContentElm = accorElm.querySelector('.accordition-content');
    var isOpen =
      accorContentElm.classList.contains('d-none') === true ? false : true;

    // Show content
    if (!isOpen) {
      accorContentElm.classList.remove('d-none');
      accorElm.classList.add('active');

      // Unactive other content if it already open
      var accorElms = document.querySelectorAll('.accordition-item');

      accorElms.forEach(accorElm => {
        var accorID = accorElm.getAttribute('id');
        if (accorID !== `accor-${id}`) {
          accorElm.classList.remove('active');
          accorElm.querySelector('.accordition-content').classList.add('d-none')
        }
      });
    } else {
      accorContentElm.classList.add('d-none');
      accorElm.classList.remove('active');
    }
  };

  return (
    <div className="accordition">
      {accorditions.map(accordition => {
        return (
          <div
            className="accordition-item"
            id={`accor-${accordition.id.toString()}`}
          >
            <div
              className="accordition-title"
              onClick={() => showAccordionContent(accordition.id)}
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
