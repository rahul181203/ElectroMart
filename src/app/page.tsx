// import {getServerSession} from "next-auth"
import Carousel from "@/components/carousel";
import { SectionSpacer } from "@/components/margins";
import BestSelling from "@/components/root/bestSelling";
import Categories from "@/components/root/categories";
import { Box, Container } from "@radix-ui/themes";
import Image from "next/image";


export default function Home(){
  return (
    <>
      <Carousel/>
      <SectionSpacer/>
      <Container size={'4'}>
        <Categories/>
        <SectionSpacer/>
        <BestSelling/>
        <SectionSpacer/>
      </Container>
    </>
  );
} 