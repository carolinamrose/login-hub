import { Link } from "react-router-dom";
import { TechList } from "../../components/TechList";
import { CreateTechModal } from "../../components/CreateTechModal";
import { useState } from "react";

export const Dashboard = ({ user, userLogout }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="dashboard__page">
            <header className="dashboard__header">
                <div className="dashboard__logo"></div>
                <Link to="/">
                    <button className="dashboard__button" onClick={userLogout}>Sair</button>
                </Link>
            </header>

            <main className="dashboard__body">
                <h3 className="dashboard__title">Olá, {user?.name}</h3>
                <p className="dashboard__course">{user?.course_module}</p>
            </main>

            <footer className="dashboard__footer">
                <div className="dashboard__container">
                    <h3 className="dashboard__title">Tecnologias</h3>
                    <button className="footer__button" onClick={() => setIsVisible(true)}></button>
                </div>
                <TechList />

                {isVisible ? (
                <CreateTechModal setIsVisible={setIsVisible} />
                ) : null}
            </footer>
        </div>
    )
};