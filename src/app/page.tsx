import Carousel from "@/components/carousel";
import Categories from "@/components/root/categories";
import { Box, Container } from "@radix-ui/themes";
import Image from "next/image";


export default function Home(){
  return (
    <>
      {/* <Image layout="responsive" height={50} width={50} src={'/carousel/casousel1.svg'} alt="img1" /> */}
      {/* <Image layout="responsive" height={50} width={50} src={'/carousel/casousel3.svg'} alt="img2" /> */}
      <Carousel/>
      <Box className="mt-5"></Box>
      <Container size={'4'}>
        <Categories/>
      </Container>
    </>
  );
} 