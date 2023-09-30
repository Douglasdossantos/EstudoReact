import style from './Post.module.css';
export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img src='https://avatars.githubusercontent.com/u/17012564?v=4'/>
                    <div className={style.authorInfo}>
                        <strong>Douglas dos Santos</strong>
                        <span>Web Developer</span>                        
                    </div>
                </div>

                <time  title='11 de maio as 08:13h' dateTime='2022-05-16'>Publicado Há 1H</time>
            </header>
            <div className={style.content}> 
                <p>Fala galera 👍</p>
                <p>Acabei de subir uma nova aula pra ver como  fica essa merda de </p>
                <p>👉<a href="">James.desing/Document</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div> 
        </article>
    );
}