import styles from './';

function BtnMenu(){
    return(
        <> 

            <li><a className="btn-menu ativo" href="">perfil</a></li>
            <li className={styles.BtnMenu}>Perfil</li>
            <button className="btn-menu ">home</button>
            <button className="btn-menu ">sair</button>
        </>
    )
}

export default BtnMenu