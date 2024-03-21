"use client"
import { Box, Flex, ScrollArea, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FaCaretLeft,FaCaretRight } from "react-icons/fa";


export default function HorizontalScroll({component,scrollID}:{component:Array<any>,scrollID:number}) {

  function scrollCondition(){
    const cards:HTMLElement = document.querySelectorAll(".home").item(scrollID) as HTMLElement,
    prevBtn:HTMLElement = document.querySelectorAll(".prev").item(scrollID) as HTMLElement,
    nextBtn:HTMLElement = document.querySelectorAll(".next").item(scrollID) as HTMLElement;

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
    const cards = document.querySelectorAll(".home").item(scrollID);
    cards.scrollLeft -= cards.clientWidth
  }

  function next(){
    const cards = document.querySelectorAll(".home").item(scrollID);
    cards.scrollLeft += cards.clientWidth
    }
  return (
    <>
      <Box className="relative px-7">
      <button onClick={()=>prev()} className='hidden bg-sage8 p-3 rounded-full shadow-lg flex items-center absolute top-[40%] left-[0] z-10 prev '><FaCaretLeft/></button>
        <button onClick={()=>next()} className=' bg-sage8 p-3 rounded-full shadow-lg flex items-center absolute top-[40%] right-[0] z-10 next'><FaCaretRight/></button>
        <Flex onScroll={()=>scrollCondition()} className="home overflow-hidden" gap={'5'} align={'center'} p={'2'} mx={'2'}>
        {component.map((e:any, i:any) => {
          return (
            <>
            {e}
            </>
          );
        })}
        </Flex>
      </Box>
    </>
  );
}
