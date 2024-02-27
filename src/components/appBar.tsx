"use client"
import { Box, Button, DialogContent, DialogRoot, DialogTrigger, Flex, Heading,Text } from "@radix-ui/themes";
import Image from "next/image";
import {TabsDemo} from './loginPop';


export default function AppBar(){
    return (
        <>
            <Box className=" bg-sage3 sticky top-0" p={'3'} px={'9'}>
                <Flex justify={'between'}>
                    <Flex gap={'4'} align={'center'}>
                        <Image src={"/logo.webp"} alt="logo" height={'60'} width={'60'} />
                        <a href="/" className=" font-semibold">Home</a>
                        <a href="/" className=" font-semibold">New Releases</a>
                        <a href="/" className=" font-semibold">My Favorites</a>
                        <a href="/" className=" font-semibold">My orders</a>
                    </Flex>
                    <Flex align={'center'} gap={'4'}>
                        <DialogRoot>
                            <DialogTrigger>
                                <Button variant="soft">Login</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <TabsDemo/>
                            </DialogContent>
                        </DialogRoot>
                        <a href="/" className="font-semibold">Cart</a>
                    </Flex>
                </Flex>

            </Box>
        </>
    );
}