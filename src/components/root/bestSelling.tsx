import { Box, Heading } from "@radix-ui/themes";
import SellingCard from "../sellingCard";

export default function bestSelling(){
  return (
    <>
        <Heading>BEST SELLING</Heading>
        <Box className="mt-3"></Box>
        <SellingCard/>
    </>
  )
}
