import { z } from "zod";

const schema = z.object({
    name: z.string().min(3).max(50),
    price: z.number().min(1),
    productCode: z.string().min(1),
});

export default schema;
