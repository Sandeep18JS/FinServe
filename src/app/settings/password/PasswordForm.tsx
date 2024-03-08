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
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const formSchema = z.object({
  currentpassword: z.string().min(2, {
    message: "",
  }),
  newpassword: z.string().min(2, {
    message: "",
  }),

  question: z.string().min(2, {
    message: "",
  }),
  answer: z.string().min(2, {
    message: "",
  }),
});

export function PasswordForm() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentpassword: "",
      newpassword: "",
      question: "",
      answer: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h1 className="font-bold text-xl">Password</h1>

        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="currentpassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">
                  Current Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder=""
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    >
                      {showCurrentPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newpassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder=""
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    >
                      {showCurrentPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <h1 className="font-bold text-xl">Security Questions</h1>
        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Question</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Security Question"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Answer</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Answer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Edit Details</Button>
        <p>Did you forget your password ?</p>
      </form>
    </Form>
  );
}
