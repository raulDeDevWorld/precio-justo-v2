'use client'


import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import style from '../page.module.css'
import Button from '../components/Button'

export default function Home() {

    const [select, setSelect] = useState(false)


    function handlerSelect () {
        setSelect(!select)
    }


    return (

        <div className={style.container}>
            <header className={style.header}></header>
            <main className={style.main}>
                <Image src="/logo.svg" width="200" height="200" alt="User" />
                <br />
                <br />
                <form className={style.form}>
                    <h4 className={style.subtitle}>Registrate</h4>
                    <br />
                    <label htmlFor="">Nombre</label>
                    <input className={style.input} type="text" placeholder="" />
                    <br />
                    <label htmlFor="">Tipo de cuenta</label>
                    {/* <select className={style.input} name="cars" id="cars" form="carform">
                        <option value="volvo">Cliente Regular</option>
                        <option value="saab">Médico</option>
                        <option value="audi">Clínica</option>
                        <option value="opel">Distrubuidor de insumos médicos</option>
                    </select> */}


                    <div className={select ? style.select: style.noSelect} onClick={handlerSelect}>
                        Select
                        <ul>
                            <li>Cliente</li>
                            <li>Médico</li>
                            <li>Clínica</li>
                            <li>Distrubuidor de insumos médicos</li>
                        </ul>
                    </div>



                    <br />
                    <label htmlFor="">Ciudad</label>
                    <input className={style.input} type="password" placeholder="" />
                    <br />
                    <div className={style.buttonsContainer}>
                        <Button style='buttonPrimary' click='Register' >Registrate</Button>
                    </div>
                    <br />
                    <div className={style.linkContainer} ><Link href="/SignUp" legacyBehavior><a className={style.link}>Olvidaste tu Contraseña</a></Link></div>
                    <br />
                    <div className={style.linkContainer} >Ya tienes una cuenta? <Link href="/" className={style.link}>Iniciar Sesión</Link></div>
                    {/* {userDB && userDB.login && <div className={style.linkContainer} >No tienes una cuenta? <Link href="/SignUp" legacyBehavior><a className={style.link}>Registrate</a></Link></div>} */}
                </form>
            </main>
            {/* {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>} */}
        </div>

    )
}