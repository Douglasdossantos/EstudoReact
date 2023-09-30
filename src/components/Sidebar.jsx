import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return (
        <asside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40' />
            
            <div className={styles.profile}>
                <img  className={styles.avatar} src='https://avatars.githubusercontent.com/u/17012564?v=4'/>

                <strong>Douglas dos santos</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Seu Perfil
                </a>
            </footer>           
        </asside>
    );
}