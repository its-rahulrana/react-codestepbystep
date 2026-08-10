import style from './assets/style.module.css';

function User (){
    return(
        <div>
            <h3>User Component</h3>
            <p className={style.para}>This is the paragraph in User component</p>
        </div>
    )
}

export default User;