import React from 'react'
import {Input, Div} from "./Filter.styled"
import { v4 as uuid } from 'uuid'

function Filter({ filter, onChange }) {
    const filterId= uuid()
    return (
        <Div>
            <label htmlFor={filterId}>Find contacts by name</label>
            <Input 
                value={filter}
                onChange={onChange}
                type="text"
                name="filter"
                id={filterId}
            />
        </Div>
    )
}

export default Filter
