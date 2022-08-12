import React, { FC } from "react";

interface IProps {
  title?: string;
  data: string[];
}

const ListOfNames: FC<IProps> = ({ title, data }) => {
  return (
    <div>
      {title ? <h1>{title}</h1> : null}
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

ListOfNames.defaultProps = {
  title: "Member",
};

export default ListOfNames;
