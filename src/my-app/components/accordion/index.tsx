import * as React from 'react';
import {IAcordition} from '@/my-app/interfaces/accordition';
import './style.scss';

interface IProps {
  data: IAcordition[];
}

const Accordion: React.FC<IProps> = ({data}) => {
  const [accorditions, setAccorditions] = React.useState<IAcordition[]>([]);
  const accordionEl = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    setAccorditions(data)
  });

  const showAccordionContent = (id: number) => {
    var accorElm = accordionEl.current.querySelector(`#accor-${id}`);
    var accorContentElm = accorElm.querySelector('.accordition-content');
    var isOpen =
      accorContentElm.classList.contains('d-none') === true ? false : true;

    // Show content
    if (!isOpen) {
      accorContentElm.classList.remove('d-none');
      accorElm.querySelector('.accordition-title').classList.add('active');

      // Unactive other content if it already open
      var accorElms = accordionEl.current.querySelectorAll('.accordition-item');

      accorElms.forEach(accorElm => {
        var accorID = accorElm.getAttribute('id');
        if (accorID !== `accor-${id}`) {
          accorElm.querySelector('.accordition-title').classList.remove('active');
          accorElm.querySelector('.accordition-content').classList.add('d-none')
        }
      });
    } else {
      accorContentElm.classList.add('d-none');
      accorElm.classList.remove('active');
    }
  };

  return (
    <div className="accordition" ref={accordionEl}>
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
