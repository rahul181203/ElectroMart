import { Box, Button, Card, Heading, Inset, Strong,Text } from "@radix-ui/themes";
import Image from "next/image";

export default function SellingCard(){
    return (
        <>
        <Card size="2" style={{ minWidth: 260 }}>
            <Inset clip="padding-box" side="top" pb="current" className="relative">
                <Image
                width={100}
                layout="responsive"
                height={440}
                src="/mobile/iphone.jpeg"
                alt="Bold typography"
                style={{
                    display: 'block',
                    objectFit: 'cover',
                    backgroundColor: 'var(--gray-5)',
                    height:'250px'
                }}
                />
            </Inset>
            <Box>
                <Heading size={'5'}>IPhone 14 pro max</Heading>
                <Box mt={'2'}></Box>
                <Heading >{`₹1,16,899`}<s className="text-sm ml-2">{`MRP: 1,25,999`}</s></Heading>
                <Text as="p" mt={'2'}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text as='p' mt={'2'} className="font-medium">Free Delivery</Text>
                {/* <Box className="flex justify-center items-center">
                    <Button radius="full" color="gold" mt={'3'} >Add to Cart</Button>
                </Box> */}
            </Box>
        </Card>
        </>
    );
}