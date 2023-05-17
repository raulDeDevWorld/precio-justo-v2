import Image from 'next/image'
import Link from 'next/link'
import style from '../page.module.css'
import Button from '../components/Button'

export default function Home() {

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
          <label htmlFor="">Correo</label>
          <input className={style.input} type="text" placeholder="example@gmail.com" />
          <br />
          <label htmlFor="">Contraseña</label>
          <input className={style.input} type="password" placeholder="contraseña" />
          <br />
          <div className={style.buttonsContainer}>
            <Button style='buttonPrimary' click='Register'>Registrate</Button>
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