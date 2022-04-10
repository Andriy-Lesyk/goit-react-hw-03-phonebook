import React from 'react';
import { Input } from './Filter.styles';
import { v4 as filterId } from 'uuid';

function Filter({ filter, onChange }) {
  return (
    <div>
      <label htmlFor={filterId(filter)}>Find contacts by name</label>
      <Input
        value={filter}
        onChange={onChange}
        type="text"
        name="filter"
        id={filterId(filter)}
      />
    </div>
  );
}
export default Filter