import  styles from './Header.module.css'
import ignitelogo  from '../assetes/ignite-logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={ignitelogo} alt='ignite logo'/>
            <strong>Ignite Feed</strong>
        </header>
    );
}