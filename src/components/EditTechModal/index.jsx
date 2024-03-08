import { useContext } from "react";
import { Input } from "../Input";
import { Selection } from "../SelectionInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TechContext } from "../../providers/TechContext";
import { editTechModalSchema } from "./editTechModal.schema";

export const EditTechModal = ({setIsVisible, editingTech}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(editTechModalSchema),
      });

      const { editTech } = useContext(TechContext);

      const onSubmit = ({ status }) => {
        const newTech = {
          status: status || editingTech.status,
        };
    
        editTech(newTech);
      };

    return (
        <div role="dialog" className="tech__dialog">
            <div className="tech__box">

                <div className="tech__header">
                    <h3 className="tech__header--title">Tecnologia Detalhes</h3>
                    <button title="Fechar" className="tech__header--button" onClick={() => setIsVisible(false)} >X</button>
                </div>

                <div className="tech__body">
                    <form className="tech__form" onSubmit={handleSubmit(onSubmit)}> 

                        <Selection
                            id="status"
                            label="Selecionar status"
                            helper={errors.status ? <p>{errors.status.message}</p> : null}
                            {...register("status")}
                        />

                        <button className="tech__submit" type="submit">Salvar alterações</button>
                    </form>
                </div>
            </div>
        </div>
    )

}