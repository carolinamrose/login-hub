import { LoginForm } from "../../components/LoginForm";
import { Link } from "react-router-dom";

export const Login = ({ setUser }) => {
    return (
        <div className="firstpage">
            <header className="header__container"></header>
            <main className="main__container">
                <h3 className="login__title">Login</h3>
                <LoginForm setUser={setUser} />
                <p className="login__text">Ainda não possui uma conta?</p>
                <Link to="/register" className="create__container">
                    <button 
                    className="login__create" 
                    type="submit">
                        Cadastre-se
                    </button>
                </Link>
            </main>
        </div>
    )
}