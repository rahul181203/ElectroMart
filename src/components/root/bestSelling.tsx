import { Box, Heading } from "@radix-ui/themes";
import SellingCard from "../sellingCard";
import HorizontalScroll from "../horizontalScroll";

const data = [
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>,
  <SellingCard key={0}/>
]

export default function bestSelling(){
  return (
    <>
        <Heading>BEST SELLING</Heading>
        <Box className="mt-3"></Box>
        <HorizontalScroll component={data} scrollID={1}/>
    </>
  )
}
