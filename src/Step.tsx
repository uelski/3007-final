import { 
    Flex,
    Card,
    Image,
    CardBody,
    Text,
    Stack,
} from "@chakra-ui/react";

const Step = ({text, image, stepNum, displayNum}: {text: string, image?: string, stepNum: number, displayNum: number}) => {

    return (
        <Flex display={stepNum == displayNum ? "block": "none"}>
            <Card maxW='50rem'>
                <CardBody>
                    <Stack spacing='3' paddingTop={'0'}>
                    <Text color={stepNum === 21 ? "#1B5E20" : "#1a202c"} fontWeight={'500'}>
                        {text}
                    </Text>
                    {
                        (image) && (
                            <Image
                                src={image}
                                alt=''
                                borderRadius='lg'
                            />
                        )
                    }
                    </Stack>
                </CardBody>
            </Card>
        </Flex>
    )
}

export default Step