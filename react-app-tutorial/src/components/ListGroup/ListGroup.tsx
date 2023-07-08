import { useState } from "react";
import styles from './ListGroup.module.css';


interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // const items = ["New York", "San Francisco", "Paris", "London", "Tokyo"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>No items Found :/</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage}
      <ul className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index? "list-group-item active": "list-group-item"
            }
            onClick={() => {setSelectedIndex(index); onSelectItem(item);}}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;