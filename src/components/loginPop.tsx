"use client"
// import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Avatar, Box, Button, Flex, Text } from '@radix-ui/themes';

export const TabsDemo = () => {
  return (
  <Tabs.Root
    className="flex flex-col w-full "
    defaultValue="tab1"
  >
    <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:bg-grass3 outline-none cursor-default"
        value="tab1"
      >
        Sign IN
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:bg-grass3 outline-none cursor-default"
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
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="email">
          Email
        </label>
        <input
        required
        type='email'
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="Email"
          placeholder='*******@gmail.com'
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="username">
          Password
        </label>
        <input
          type='password'
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="password"
        />
      </fieldset>
      <div className="flex justify-end mt-5">
        <Button variant={'solid'} className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
          Login
        </Button>
      </div>
      {/* <Seperato */}
      <Flex direction={'column'} align={'center'} gap={'4'}>
        <Box className='bg-sage2 w-fit p-2 rounded-md'>
          <Avatar src={'/logos/google.png'} fallback={'G'} mr={'2'}/> 
            <Text> Sign In with Google</Text>
        </Box>
        <Box className='bg-sage2 w-fit p-2 rounded-md'>
        <Avatar src={'/logos/apple.png'} fallback={'A'} mr={'2'}/> 
            <Text>  Sign In with Apple</Text>
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
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
      <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="Full Name"
        >
          Full Name
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="name"
          type="text"
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="email"
        >
          Email ID
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="email"
          type="email"
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="newPassword"
          type="password"
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="confirmPassword"
        >
          Confirm password
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="confirmPassword"
          type="password"
        />
      </fieldset>
      <div className="flex justify-end mt-5">
        <Button variant='classic' className=" bg-sage3 inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
          Register
        </Button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
  );
}