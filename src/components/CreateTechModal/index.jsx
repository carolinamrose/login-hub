import { useContext } from "react";
import { Input } from "../Input";
import { Selection } from "../SelectionInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTechModalSchema } from "./createTechModal.schema";
import { TechContext } from "../../providers/TechContext";

export const CreateTechModal = ({setIsVisible}) => {

    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(createTechModalSchema),
      });

      const { createTech } = useContext(TechContext);

      const onSubmit = (payload) => {
        createTech(payload);
      };

    return (
        <div role="dialog" className="tech__dialog">
            <div className="tech__box">

                <div className="tech__header">
                    <h3 className="tech__header--title">Cadastrar Tecnologia</h3>
                    <button title="Fechar" className="tech__header--button" onClick={() => setIsVisible(false)} >X</button>
                </div>

                <div className="tech__body">
                    <form className="tech__form" onSubmit={handleSubmit(onSubmit)}> 

                        <Input
                            id="title"
                            label="Nome" 
                            type="text" 
                            placeholder="Insira a tecnologia"
                            helper={errors.title ? <p>{errors.title.message}</p> : null}
                            {...register("title")}
                        />
                    
                        <Selection
                            id="status"
                            label="Selecionar status"
                            helper={errors.status ? <p>{errors.status.message}</p> : null}
                            {...register("status")}
                        />

                        <button className="tech__submit" type="submit">Cadastrar Tecnologia</button>
                    </form>
                </div>
            </div>
        </div>
    )
}