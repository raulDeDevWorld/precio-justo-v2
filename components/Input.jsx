'use client';

import { useRouter } from 'next/navigation';
import style from './Input.module.css'


export default function Button({click, type, reference, placeholder, styled}) {

    const router = useRouter()


    function handlerButton(e) {
        e.preventDefault(e)
        router.push(click)
    }


    return (
        <input
            type={type}
            className={style.input}
            style={{...styled}}
            ref={reference}
            placeholder={placeholder}
          />
    )
}