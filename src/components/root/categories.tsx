"use client"
import { Box, Flex, ScrollArea, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FaCaretLeft,FaCaretRight } from "react-icons/fa";


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

  function scrollCondition(){
    const cards:HTMLElement = document.querySelectorAll(".home").item(0) as HTMLElement,
    prevBtn:HTMLElement = document.querySelectorAll(".prev").item(0) as HTMLElement,
    nextBtn:HTMLElement = document.querySelectorAll(".next").item(0) as HTMLElement;

    if(cards.scrollLeft === 0){
      prevBtn.style.display = "none";
    }else{
      prevBtn.style.display = "unset";
    }

    if(cards.scrollLeft+cards.clientWidth === cards.scrollWidth){
      nextBtn.style.display = "none";
    }else{
      nextBtn.style.display = "unset";
    }
  }

  function prev(){
    const cards = document.querySelectorAll(".home").item(0);
    cards.scrollLeft -= cards.clientWidth
  }

  function next(){
    const cards = document.querySelectorAll(".home").item(0);
    cards.scrollLeft += cards.clientWidth
    }
  return (
    <>
      <Box className="relative px-7">
      <button onClick={()=>prev()} className='hidden bg-sage8 p-3 rounded-full shadow-lg flex items-center absolute top-[40%] left-[0] z-10 prev '><FaCaretLeft/></button>
        <button onClick={()=>next()} className=' bg-sage8 p-3 rounded-full shadow-lg flex items-center absolute top-[40%] right-[0] z-10 next'><FaCaretRight/></button>
        <Flex onScroll={()=>scrollCondition()} className="home overflow-hidden" gap={'5'} align={'center'} p={'2'} mx={'2'}>
        {data.map((e, i) => {
          return (
            <Flex className="cards" key={i} direction={"column"} align={"center"}>
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
      </Box>
    </>
  );
}
