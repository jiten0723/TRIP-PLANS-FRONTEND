// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/Form";
// import { Input } from "@/components/ui/Input";

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   password: z
//     .string()
//     .min(8, { message: "Password must be at least 8 characters." }),
// });

// export function Login() {
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//       password: "",
//     },
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <Form {...form}>
//       <div className=" ml-153 mx-150 mt-20">
//         <h1 className="  text-4xl  font-extrabold ">YOUR DATA</h1>
//       </div>

//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="justify-center space-y-8 border-1 rounded-lg ml-120 mt-14 p-8  m-140  "
//       >
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input placeholder="********" {...field} />
//               </FormControl>
//               <FormDescription>Must be at least 8 letters.</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// }

// export default Login;
