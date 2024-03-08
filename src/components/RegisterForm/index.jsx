import { Input } from "../../components/Input";
import { Option } from "../OptionInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(registerFormSchema),
      });

      const onSubmit = (payload) => {
        userRegister(payload);
        alert("Cadastrado com sucesso!");
      };

      const userRegister = async (payload) => {
        try {
          const { data } = await api.post("/users", payload);
          navigate("/");
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className="register__container">
            <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="register__title">Crie sua conta</h3>
                <p className="register__text">Rápido e grátis, vamos nessa</p>

                <Input 
                    id="name"
                    label="Nome" 
                    type="text" 
                    placeholder="Digite aqui seu nome"
                    helper={errors.name ? <p>{errors.name.message}</p> : null}
                    {...register("name")}
                />


                <Input 
                    id="email"
                    label="Email" 
                    type="email" 
                    placeholder="Digite aqui seu email"
                    helper={errors.email ? <p>{errors.email.message}</p> : null}
                    {...register("email")}
                />
            
                <Input 
                    id="password"
                    label="Sua Senha" 
                    type="password" 
                    placeholder="Digite aqui sua senha"
                    helper={errors.password ? <p>{errors.password.message}</p> : null}
                    {...register("password")}
                />

                <Input 
                    id="confirmPassword"
                    label="Confirmar Senha" 
                    type="password" 
                    placeholder="Digite novamente sua senha"
                    helper={errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}
                    {...register("confirmPassword")}
                />

                <Input 
                    id="bio"
                    label="Bio" 
                    type="text" 
                    placeholder="Fale sobre você"
                    helper={errors.bio ? <p>{errors.bio.message}</p> : null}
                    {...register("bio")}
                />

                <Input 
                    id="contact"
                    label="Contato" 
                    type="text" 
                    placeholder="Opção de contato"
                    helper={errors.contact ? <p>{errors.contact.message}</p> : null}
                    {...register("contact")}
             />

             <Option
                    id="course_module"
                    label="Selecionar módulo"
                    helper={errors.course_module ? <p>{errors.course_module.message}</p> : null}
                    {...register("course_module")}
             />

                <button className="button__register">Cadastrar</button>            
            </form>
        </div>
    )
};