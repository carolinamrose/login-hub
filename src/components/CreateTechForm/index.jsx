import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";

export const CreateTechForm = () => {
    const { register, handleSubmit } = useForm();

    const { createTech } = useContext(TechContext);

    const submit = (formData) => {
        createTech(formData);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input placeholder="Título" type="text" {...register("title")} />
            <textarea placeholder="Conteúdo" {...register("content")} />
            <button type="submit">Criar nota</button>
        </form>
    )
}