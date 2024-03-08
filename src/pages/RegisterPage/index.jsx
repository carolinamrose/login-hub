import { RegisterForm } from "../../components/RegisterForm";
import { Link } from "react-router-dom";

export const Register = () => {

    return (
        <div className="first__area">
            <header className="header__container--register">
                <div className="header__logo"></div>
                <Link to="/">
                    <button className="header__button">Voltar</button>
                </Link>
            </header>
            <RegisterForm />
        </div>
    )
};