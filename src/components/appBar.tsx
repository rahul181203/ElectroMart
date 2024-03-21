import { Box, Button, DialogContent, DialogRoot, DialogTrigger, Flex, Heading,Text } from "@radix-ui/themes";
import Image from "next/image";
import {TabsDemo} from './loginPop';
import { auth, signOut } from "@/auth";


export const AppBar = async ()=>{
    const session = await auth();
    
    return (
        <>
            <Box className=" bg-sage3 sticky top-0 z-30" p={'3'} px={'9'}>
                <Flex justify={'between'}>
                    <Flex gap={'4'} align={'center'}>
                        <Image src={"/logo.webp"} alt="logo" height={'60'} width={'60'} />
                        <a href="/" className=" font-semibold">Home</a>
                        <a href="/" className=" font-semibold">New Releases</a>
                        <a href="/" className=" font-semibold">My Favorites</a>
                        <a href="/" className=" font-semibold">My orders</a>
                    </Flex>
                    <Flex align={'center'} gap={'4'}>
                        {
                            (!session?.user)?
                            <DialogRoot>
                                <DialogTrigger >
                                    <Button variant="soft" className="hover:cursor-pointer">Login</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <TabsDemo/>
                                </DialogContent>
                            </DialogRoot>
                            :<form action={async ()=>{
                                "use server"
                                await signOut();
                            }}>
                                <Button type="submit" className="hover:cursor-pointer" variant="soft">Logout</Button>
                            </form>
                        }
                        
                        <a href="/" className="font-semibold">Cart</a>
                    </Flex>
                </Flex>

            </Box>
        </>
    );
}