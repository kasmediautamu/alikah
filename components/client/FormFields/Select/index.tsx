import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import s from './Select.module.scss';

export interface DropdownSelectProps {
  value: string;
  items: string[];
  classNameContainer?: string;
  onChange: (value: any) => void;
}

const DropdownSelect: React.FunctionComponent<DropdownSelectProps> = (
  props: DropdownSelectProps,
) => {
  const { value, items, classNameContainer } = props;

  /**
   * On click item
   * @param value the item's value
   */
  // eslint-disable-next-line no-shadow
  const onClickItem = (value: string) => {
    props.onChange(value);
  };
  function DownArrowIcon(){
      return (
          <img src='./icons/downarrow.svg' alt="alika ads down arrow" />
      )
  }
  return (
    <Dropdown className={`dropdown-select ${classNameContainer || ''}`}>
      <Dropdown.Toggle variant="outline">
        <div className="toggle-label">{value || ''}</div>
        {/* <span /> */}
        <DownArrowIcon/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item
            key={index}
            as="button"
            className={value === item ? 'selected' : ''}
            onClick={() => onClickItem(item)}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownSelect;
