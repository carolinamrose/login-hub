import { z } from "zod";

const editTechModalSchema = z.object({
    status: z.string()
});

export { editTechModalSchema };