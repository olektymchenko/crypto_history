import React from 'react';

const Select = (props) => {
    return (
        <div className="SelectClass">
            <select value={props.value} onChange={(e) => props.setCurrency(e, "value")}>
                <option value="BTC">BTC  Bitcoin</option>
                <option value="ETH">ETH  Ethereum</option>
            </select>
            <span>From:</span>
            <input type="date" onChange={(e) => props.setDateFrom(e, "value")}></input>
            <span>To:</span>
            <input type="date" onChange={(e) => props.setDateTo(e, "value")}></input>
            <button onClick={props.getData}>Get Info!</button>
        </div>
    )
}
export default Select;