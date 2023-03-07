import React from 'react'

const Valuta = ({data}) => {

    return (
        <option value={data.NumCode}>
            {data.Name}
        </option>
    )
}

export default Valuta
