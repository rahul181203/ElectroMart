"use client"
import { Box, Flex, ScrollArea, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FaCaretLeft,FaCaretRight } from "react-icons/fa";
import HorizontalScroll from '../horizontalScroll';


export const BrandComponent=({img,name}:{img:string,name:string})=>{
  return(
    <>
      <Flex className="cards" direction={"column"} align={"center"}>
        <Box className="rounded-full relative bg-sage3 p-5 shadow-lg w-[100px] h-[100px] flex items-center">
          <Image
            src={img}
            alt={name}
            layout="responsive"
            width={20}
            height={10}
          />
        </Box>
        {/* <Text>{e.name}</Text> */}
      </Flex>
    </>
  );
}

const data:any = [
  <BrandComponent key={0} img="/logos/apple.png" name="Apple" />,
  <BrandComponent key={0} img="/logos/google.png" name="Pixel" />,
  <BrandComponent key={0} img="/logos/honor.png" name="Honor" />,
  <BrandComponent key={0} img="/logos/mi.png" name="Xiomi" />,
  <BrandComponent key={0} img="/logos/nothing.webp" name="Nothing" />,
  <BrandComponent key={0} img="/logos/moto.png" name="Motorola" />,
  <BrandComponent key={0} img="/logos/oneplus.png" name="OnePlus" />,
  <BrandComponent key={0} img="/logos/oppo.svg" name="OPPO" />,
  <BrandComponent key={0} img="/logos/realme.png" name="Realme" />,
  <BrandComponent key={0} img="/logos/samsung.png" name="Samsung" />,
  <BrandComponent key={0} img="/logos/vivo.png" name="VIVO" />,
  
];

export default function Categories() {
  return (
    <>
      <HorizontalScroll scrollID={0} component={data} />
    </>
  );
}
