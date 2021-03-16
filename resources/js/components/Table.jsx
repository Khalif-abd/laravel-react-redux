import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import {GetCurrency} from "../redux/action/getAction";
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
    const defaultDate = (new Date()).toISOString().split('T')[0];
    const [from, setFrom] = useState(defaultDate)
    const [to, setTo] = useState(defaultDate)

    const history = useHistory()
    const dispatch = useDispatch();

    function onChange(e) {
        if(e.target.id === 'dateFrom') {
            setFrom(e.target.value)
        }
        else if(e.target.id === 'dateTo') {
            setTo(e.target.value)
        }
    }

    useEffect(() => {
        const params = new URLSearchParams()
        params.append("dateFrom", from)
        params.append("dateTo", to)
        history.push({search: params.toString()})

        dispatch(GetCurrency(from,to))

    }, [from, to, history, dispatch])

    const data = useSelector((state) => state.GetCurrency.data);

 return (
     <>
        <div className={'dateFrom'}>
            <label htmlFor="dateFrom">Date from:</label><br/>
                <input type="date" id="dateFrom" onChange={onChange} />
        </div>
         <div className={'dateTo'}>
             <label htmlFor="dateTo">Date to:</label><br/>
             <input type="date" id="dateTo" onChange={onChange}  />
         </div>


        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">valuteID</th>
                <th scope="col">numCode</th>
                <th scope="col">сharCode</th>
                <th scope="col">Nominal</th>
                <th scope="col">name</th>
                <th scope="col">value</th>
                <th scope="col">date</th>
            </tr>
            </thead>
            <tbody>
            { data.map((item, id) => {
                    return (
                        <tr key={id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.valuteID}</td>
                        <td>{item.numCode}</td>
                        <td>{item.сharCode}</td>
                        <td>{item.nominal}</td>
                        <td>{item.name}</td>
                        <td>{item.value}</td>
                        <td>{item.date}</td>
                    </tr>)
                })
            }
            </tbody>
        </table>
     </>
 );
}

export default Table;
