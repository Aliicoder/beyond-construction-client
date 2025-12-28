import { z } from "zod";

export default z.object({
  name: z.string().min(1).min(0).max(20),
  email: z.string(),
  mobile_number: z.string().regex(/^\+9665\d{8}$/, "رقم سعودي صحيح مطلوب"),
  message: z.string(),
});
