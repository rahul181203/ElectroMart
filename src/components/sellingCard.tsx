import { Box, Card, Heading, Inset, Strong,Text } from "@radix-ui/themes";
import Image from "next/image";

export default function SellingCard(){
    return (
        <>
        <Card size="2" style={{ maxWidth: 260 }}>
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
                <Heading ><s className="text-lg">{`1,25,900`}</s></Heading>
            </Box>
        </Card>
        </>
    );
}