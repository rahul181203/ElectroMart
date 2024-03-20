"use client";
// import React from 'react';
import * as Tabs from "@radix-ui/react-tabs";
import { Avatar, Box, Button, Flex, Text } from "@radix-ui/themes";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, useForm } from "react-hook-form";
import { loginSchema, registerSchema } from "@/schemas/index";
import { Login } from "../actions/login";
import {useState, useTransition} from "react"
import { register } from "../actions/register";
import { signIn } from "next-auth/react";
import { DEFAULT_REDIRECT_PATH } from "@/routes";

export const TabsDemo = () => {
  const [isPending,startTransition] = useTransition();
  const [msg,setMsg] = useState<string>("");

  const form1 = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const form2 = useForm<z.infer<typeof registerSchema>>({
    resolver:zodResolver(registerSchema),
    defaultValues:{
      email:"",
      pass:"",
      cpass:"",
      name:"",
    }
  });

  const handleSubmitLogin = (values:z.infer<typeof loginSchema>)=>{   
    setMsg(""); 
    startTransition(()=>{
      Login(values).then((data)=>{
        setMsg(data?.error!);
      })
    })    
  }

  const handleSubmitRegister = (values:z.infer<typeof registerSchema>)=>{    
    startTransition(()=>{
      register(values).then((data)=>{
        console.log(data);
      })
    })    
  }

  const onClick=(provider:"google"|"facebook")=>{
    signIn(provider,{
      callbackUrl:DEFAULT_REDIRECT_PATH
    })
  }

  return (
    <Tabs.Root className="flex flex-col w-full " defaultValue="tab1">
      <Tabs.List
        className="shrink-0 flex border-b border-mauve6"
        aria-label="Manage your account"
      >
        <Tabs.Trigger
          className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-sage1 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:bg-indigo9 outline-none cursor-default"
          value="tab1"
        >
          Sign IN
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-sage1 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:bg-indigo9 outline-none cursor-default"
          value="tab2"
        >
          Register
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow p-5 bg-white rounded-b-md outline-none "
        value="tab1"
      >
        <p className="mb-5 text-mauve11 text-[15px] leading-normal text-center">
          {`Login to your account here. Click save when you're done.`}
        </p>
        {/* <Form {...form}> */}
          <form onSubmit={form1.handleSubmit(handleSubmitLogin)}>
            <fieldset className="mb-[15px] w-full flex flex-col justify-start">
              <label
                className="text-[13px] leading-none mb-2.5 text-violet12 block"
                htmlFor="Email-login"
              >
                Email
              </label>
              <input
              autoComplete="email"
                type="email"
                className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="Email-login"
                {...form1.register("email")}
                disabled={isPending}
                placeholder="*******@gmail.com"
              />
            </fieldset>
            <fieldset className="mb-[15px] w-full flex flex-col justify-start">
              <label
                className="text-[13px] leading-none mb-2.5 text-violet12 block"
                htmlFor="password-login"
              >
                Password
              </label>
              <input
              autoComplete="new-password"
                type="password"
                className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="password-login"
                disabled={isPending}
                placeholder="******"
                {...form1.register("password")}
              />
              <p>{msg}</p>
            </fieldset>
            <Box className="flex justify-end mt-5">
              <Button
                type="submit"
                className=" bg-sage3 hover:cursor-pointer"
                variant={'soft'}
              >
                Login
              </Button>
            </Box>
          </form>
        {/* </Form> */}
        {/* <Seperato */}
        <Flex direction={"column"} align={"center"} gap={"4"}>
          <Box className="bg-sage2 w-fit p-2 rounded-md cursor-pointer" onClick={()=>onClick("google")}>
            <Avatar src={"/logos/google.png"} fallback={"G"} mr={"2"} />
            <Text>Sign In with Google</Text>
          </Box>
          <Box className="bg-sage2 w-fit p-2 rounded-md cursor-pointer" onClick={()=>onClick('facebook')}>
            <Avatar src={"/logos/fb.avif"} fallback={"A"} mr={"2"} />
            <Text> Sign In with Facebook</Text>
          </Box> 
        </Flex>
      </Tabs.Content>

      {/* register */}

      <Tabs.Content
        className="grow p-5 bg-white rounded-b-md outline-none"
        value="tab2"
      >
        <p className="mb-5 text-mauve11 text-[15px] leading-normal text-center">
          {`Welcome to Ecommerce Try out the latest products for your taste.`}
        </p>
        <form onSubmit={form2.handleSubmit(handleSubmitRegister)}>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="name-reg"
          >
            Full Name
          </label>
          <input
          autoComplete="name"
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="name-reg"
            type="text"
            placeholder="Jhon Mid"
                disabled={isPending}
                {...form2.register("name")}
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="email-reg"
          >
            Email ID
          </label>
          <input
          autoComplete="email"
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="email-reg"
            type="email"
            placeholder="*****@gmail.com"
                disabled={isPending}
                {...form2.register("email")}
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="newPassword-reg"
          >
            Password
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="newPassword-reg"
            type="password"
                disabled={isPending}
                placeholder="******"
            {...form2.register("pass")}
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="confirmPassword-reg"
          >
            Confirm password
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                disabled={isPending}
                id="confirmPassword-reg"
            placeholder="******"
            type="password"
            {...form2.register("cpass")}
          />
        </fieldset>
        <div className="flex justify-end mt-5">
          <Button
            type="submit"
            variant="soft"
            className=" bg-sage3 inline-flex items-center justify-center rounded px-[15px] text-[15px]  hover:cursor-pointer"
            disabled={isPending}
            >
            Register
          </Button>
        </div>
        </form>
      </Tabs.Content>
    </Tabs.Root>
  );
};
