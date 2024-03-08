import { z } from "zod";

const formSchema = z.object({
    email: z.string().min(1, "Este campo é obrigatório."),
    password: z.string().min(1, "Este campo é obrigatório."),
});

export { formSchema };