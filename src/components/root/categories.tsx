import { Box, Flex, ScrollArea, Text } from "@radix-ui/themes";
import Image from "next/image";

const data = [
  {
    img: "/logos/apple.png",
    name: "Apple",
  },
  {
    img: "/logos/google.png",
    name: "Pixel",
  },
  {
    img: "/logos/honor.png",
    name: "Honor",
  },
  {
    img: "/logos/mi.png",
    name: "Xiomi",
  },
  {
    img: "/logos/nothing.png",
    name: "Nothing",
  },
  {
    img: "/logos/moto.png",
    name: "Motorola",
  },
  {
    img: "/logos/oneplus.png",
    name: "OnePlus",
  },
  {
    img: "/logos/oppo.svg",
    name: "OPPO",
  },
  {
    img: "/logos/realme.png",
    name: "Realme",
  },
  {
    img: "/logos/samsung.png",
    name: "Samsung",
  },
  {
    img: "/logos/vivo.png",
    name: "VIVO",
  },
];

export default function Categories() {
  return (
    <>
    
      <ScrollArea type={'hover'} scrollbars={'both'}>
        <Flex gap={'5'} align={'center'} mb={'5'} mx={'2'}>
        {data.map((e, i) => {
          return (
            <Flex key={i} direction={"column"} align={"center"}>
              <Box className="rounded-full relative bg-sage3 p-5 shadow-lg w-[100px] h-[100px] flex items-center">
                <Image
                  src={e.img}
                  alt={e.name}
                  layout="responsive"
                  width={20}
                  height={10}
                />
              </Box>
              {/* <Text>{e.name}</Text> */}
            </Flex>
          );
        })}
        </Flex>
      </ScrollArea>
      
    </>
  );
}
