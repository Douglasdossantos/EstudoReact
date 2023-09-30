import {Header} from './components/Header';
import { Sidebar } from './components/Sidebar';
import {Post} from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {
    return (
      <div>
        <Header/>
        <div className={styles.wrapp}>
          <Sidebar/>
          <main>
              <Post 
                author="Douglas dos santos"  
                content="Lorem de teste para ver como éxzvxcvzxv zxcv xc vxvxcvzx vzx zx vxvzxv xzvxv xzcvb sdfgdg dghdg dg xbxcb cbcxbxcvb xc bcxbxc bd gdsfg dfg d"
              />
              <Post
                author ="Teste de funcionalidade"
                content="um novo posto muito legal bcbcvbcxvbdshsrjyj fghjfjdghmvnkmgdjyrstyert6 fdgdfgsdgsdh"
              />
            </main>
        </div>
      </div>
  );
}

