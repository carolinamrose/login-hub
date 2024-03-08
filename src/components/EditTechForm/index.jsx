import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { useContext } from "react";

export const EditTechForm = () => {
    const { editingTech, editTech } = useContext(TechContext);

    const { register, handleSubmit } = useForm({
        values: {
            title: editingTech.title,
            content: editingTech.content,
        }
    });
    

    const submit = (formData) => {
        editTodo(formData);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input placeholder="Título" type="text" {...register("title")} />
            <textarea placeholder="Conteúdo" {...register("content")} />
            <button type="submit">Editar nota</button>
        </form>
    )
}