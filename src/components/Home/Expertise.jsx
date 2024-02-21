
import '../../App.css'
import php from '../../assets/php.png'
import laravel from '../../assets/laravel.jpg'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import mysql from '../../assets/mysql.jpg'
import js from '../../assets/js.png'
import reacts from '../../assets/react.png'
import nodejs from '../../assets/node.png'

export default function Expertise(){
    return(
    <div class="d-flex flex-wrap gap-4 rounded-4 p-2 my-3">
             <img src={html} className='shadow rounded-3 expertise' alt="html" />
             <img src={css} className='shadow rounded-3 expertise' alt="css" />
             <img src={js} className='shadow rounded-3 expertise' alt="js" />
            <img src={php} className='shadow rounded-3 expertise' alt="php" />
            <img src={mysql} className='shadow rounded-3 expertise' alt="mysql" />
            <img src={laravel} className='shadow rounded-3 expertise' alt="laravel" />
            <img src={nodejs} className='shadow rounded-3 expertise' alt="react" />
            <img src={reacts} className='shadow rounded-3 expertise' alt="react" />
    </div>
    )

}