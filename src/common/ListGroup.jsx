import React from 'react';

const ListGroup = ({ onItemSelect, selectedItem, items, textProperty }) => {
  const style = { cursor: 'pointer' };
  return (
    <ul className='list-group  m-2' style={style}>
      {items.map(item => (
        <li
          key={item[textProperty]}
          // toggle between each item, checks for the selected item
          // filters the selected item
          onClick={e => onItemSelect(item)}
          className={
            item === selectedItem ? 'list-group-item active' : 'list-group-item'
          }
          style={style}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

//sets a default props value
ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

export default ListGroup;
