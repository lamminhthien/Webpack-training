import * as React from 'react';
import {ITab} from '@/my-app/interfaces/tab';
import './style.scss';

interface IProps {
  data: ITab[];
}

const Tab: React.FC<IProps> = ({data}) => {
  const [tabs, setTabs] = React.useState<ITab[]>([]);
  const tabEl = React.useRef<HTMLDivElement>();
  const tabContentEl = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    setTabs(data);
  });

  const showTabContent = (id: number) => {
    tabContentEl.current.innerHTML = data[id].content;
  };

  return (
    <div className="tab" ref={tabEl}>
      {tabs.map(tab => {
        return (
          <div className="container">
            <div
              className="tab-item"
              id={`tab-${tab.id.toString()}`}
              onClick={() => showTabContent(tab.id)}
            >
              <div className="tab-title">{tab.title}</div>
            </div>
          </div>
        );
      })}
      <div className="tab-content" ref={tabContentEl}></div>
    </div>
  );
};

export default Tab;
