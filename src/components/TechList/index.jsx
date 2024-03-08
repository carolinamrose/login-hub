import { useContext } from "react";
import { TechContext } from "../../providers/TechContext.jsx";
import { EditTechModal } from "../EditTechModal/index.jsx";
import { useState } from "react";

export const TechList = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { techList, deleteTech, setEditingTech } = useContext(TechContext);
    console.log(techList)

    const click = (tech) => {
        setIsVisible(true);
        setEditingTech(tech);
    }
    
   return (
    <div className="tech__container">
        <ul className="tech__list">
            { techList !== undefined ? 

            techList.map((tech) => ( 
                <li className="tech__item" key={tech.id}>
                    <div className="first__item">
                        <h3>{tech.title}</h3>
                    </div>
                    <div className="final__item">
                        <p>{tech.status}</p>
                        <button 
                        className="edit__item"
                        alt="Exluir item"
                        onClick={() => click(tech)
                        }
                        />
                        <button 
                        className="delete__item"
                        alt="Exluir item"
                        onClick={() => deleteTech(tech)}
                        />
                        </div>
                </li>
            
        )): null } 

        {isVisible ? (
            <EditTechModal  setIsVisible={setIsVisible} />
        ) : null}
    </ul>
</div>
   );
}; 
