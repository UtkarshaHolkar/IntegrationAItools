import exp from 'constants';
import * as z from 'zod';
//sdfgh
export const formSchema = z.object({
  prompt: z.string().min(1,{
    message:" Image prompt is required ",
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1)
});

export const amountOptions = [ 
  {
    value: "1",
    label: "1 photo",
  },
  {
    value: "2",
    label: "2 photo",
  },
  {
    value: "3",
    label: "3 photo",
  },
  {
    value: "4",
    label: "4 photo",
  },
  {
    value: "5",
    label: "5 photo",
  },
  
]

export const resolutionOptions = [
  {
    value: "256*256",
    label: "256*256",
  },
  {
    value: "512*512",
    label: "512*512",
  },
  {
    value: "1024*1024",
    label: "1024*1024",
  },
]