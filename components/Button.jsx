'use client';

import { useRouter } from 'next/navigation';
import style from './Button.module.css'


export default function Button(props) {

    const router = useRouter()


    function handlerButton(e) {
        e.preventDefault(e)
        router.push(props.click)
    }


    return (
        <button
            className={`${style.button} ${style[props.style]}`}
            onClick={handlerButton}>
            {props.children}
        </button>
    )
}