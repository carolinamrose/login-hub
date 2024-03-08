import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../components/LoginForm/formSchema";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({setUser}) => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(formSchema),
      });

      const onSubmit = (payload) => {
        userLogin(payload);
      };
    
      const userLogin = async (payload) => {
        try {
          const { data } = await api.post("/sessions", payload);
          setUser(data.user);
          console.log(data)
          localStorage.setItem("@TOKEN", data.token);
          navigate("/dashboard");
        } catch (error) {
          alert('Email e/ou senha incorreta');
        }
      };

    return (
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <Input 
                id="email"
                label="Email" 
                type="email" 
                placeholder="seu email"
                error={errors.email}
                {...register("email")} 
            />

            <Input 
                id="password"
                label="Senha" 
                type="password" 
                placeholder="sua senha"
                error={errors.password}
                {...register("password")} 
            />

            <button className="login__submit" type="submit">Entrar</button>
        </form>
    )
};