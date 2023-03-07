import React from 'react'
import "./list_kpi.css"

function ListKpi() {
    return (
        <div className='listKpi-contain'>
            <from className='listKpi-form'>
                <fieldset className='listKpi-set'>
                    <label className='listKPi-label'>Name:</label>
                    <input type="text" autoComplete='off'/>
                </fieldset>
            </from>
        </div>
    )
}
export default ListKpi