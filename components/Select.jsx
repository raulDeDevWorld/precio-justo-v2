'use client';

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import style from './Select.module.css'


export default function Select({arr}) {

    const router = useRouter()

    const [select, setSelect] = useState(false)
    const [state, setState] = useState('La Paz')

    function handlerSelect () {
        setSelect(!select)
    }

    function handlerUserState (data) {
        setState(data)
    }



    return (

        <div className={select ? style.select : style.noSelect} onClick={handlerSelect}>
            {state} <span>{'>'}</span>
            <ul>
                {
                    arr.map((i)=> <li onClick={() => handlerUserState(i)}>{i}</li>)
                }
            
            </ul>
        </div>
    )
}