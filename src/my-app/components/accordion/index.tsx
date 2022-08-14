import * as React from 'react';
import {IAcordition} from '@/my-app/interfaces/accordition';
import './style.scss'

interface IProps {
  data: [];
}


var accorditionArray: IAcordition[] = [
  {id: 0, content: 'This is content for 0', title: 'This is title 0'},
  {id: 1, content: 'This is content for 1', title: 'This is title 1'},
  {id: 2, content: 'This is content for 2', title: 'This is title 2'}
];

const Accordion: React.FC<IProps> = ({data}) => {
  const [accorditions, setAccorditions] = React.useState<IAcordition[]>([]);
  console.log(accorditionArray);
  
  React.useEffect(() => {
    setAccorditions(accorditionArray)
  });

  const showAccorditionContent = (id: number) => {
    // Get accorditionContentElm
    var accorditionContentElm = document.getElementById(`${id}`).querySelector('.accordition-content');
    var isOpen = (accorditionContentElm.classList.contains('d-none')) === true ? false : true
    
    // Show content
    if (!isOpen)  accorditionContentElm.classList.remove('d-none');
    else accorditionContentElm.classList.add('d-none');
  }


  return (
    <div className="accordition">
      {accorditions.map((accordition) => {
        return (
          <div className='accordition-item' id={accordition.id.toString()}>
            <div className="accordition-title" onClick={() => showAccorditionContent(accordition.id)}>{accordition.title}</div>
            <div className="accordition-content d-none">{accordition.content}</div>
          </div>
        );
      })}
    </div>
    // <>Dump</>
  );
};

export default Accordion;
