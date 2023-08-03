import * as z from 'zod';
//sdfgh
export const formSchema = z.object({
  prompt: z.string().min(1,{
    message:"prompt is required",
  }),
});
