import { 
    Flex,
    Card,
    Image,
    CardBody,
    Text,
    Stack,
    Code,
    Heading,
    Divider
} from "@chakra-ui/react";

const Step = ({text, image, stepNum, displayNum, link, code}: {text: string, image?: string, stepNum: number, displayNum: number, link?: string, code?: string}) => {

    return (
        <Flex display={stepNum == displayNum ? "block": "none"}>
            <Card maxW='50rem'>
                <CardBody>
                    <Stack spacing='3' paddingTop={'0'}>
                    <Text>
                        {text}
                    </Text>
                    {
                        (link) && (
                            <a href={link} target="_blank">{link}</a>
                        )
                    }
                    {
                        (code) && (
                            <Code>{code}</Code>
                        )
                    }
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

export const FinalStep = ({stepNum, displayNum}: {stepNum: number, displayNum: number}) => {

    return (
        <Flex display={stepNum == displayNum ? "block": "none"}>
            <Card maxW='50rem'>
                <CardBody>
                    <Stack spacing='3' paddingTop={'0'}>
                        <Heading>HARDEST QUESTION</Heading>
                        <Text>We have completed our discussion on the method of gradient descent, now for the hardest question of the year!</Text>
                        <Divider></Divider>
                        <Text fontWeight={"600"}>If you had to be a letter of the alphabet, what letter would you be? Cursive or print? Upper case or lower case?</Text>
                        <Text color={"#1B5E20"}>
                        I would have to choose a lowercase v, preferably in a shade of dark green. Yes, my last name does start with a V, thus a lifelong affinity for the letter. I like the lowercase look as it is more subdued, and in line with some of the experimental electronic music I am a fan of.
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Flex>
    )
}

export default Step