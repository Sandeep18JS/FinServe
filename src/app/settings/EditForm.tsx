"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  profilePicture: z.any().optional(),
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(2, {
    message: "should be number",
  }),
  country: z.string().min(2, {
    message: "must select a country.",
  }),
  city: z.string().min(2, {
    message: "must select a city",
  }),
  address: z.string().email({
    message: "must enter address",
  }),
  zipcode: z.string().min(2, {
    message: "should be number",
  }),
});

export function EditForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      zipcode: "",
      profilePicture: null,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3.5">
        <FormField
          control={form.control}
          name="profilePicture"
          render={({ field }) => (
            <FormItem>
              <FormControl className="relative">
                <div className="rounded-full overflow-hidden w-16 h-16 border-2 border-gray-200">
                  <input
                    type="file"
                    accept="image/*"
                    {...field}
                    value={undefined} // Add this line
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="sandeep" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="vemula" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+1445545" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <h1 className="font-bold text-xl">Personal Address</h1>
        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Select country</FormLabel>
                <FormControl>
                  <Input placeholder="India" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Select city</FormLabel>
                <FormControl>
                  <Input placeholder="Hyderabad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-8 ">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">
                  Enter your address
                </FormLabel>
                <FormControl>
                  <Input placeholder="548 Ameerpet #23" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipcode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Enter Zipcode</FormLabel>
                <FormControl>
                  <Input placeholder="507123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Edit Details</Button>
      </form>
    </Form>
  );
}
