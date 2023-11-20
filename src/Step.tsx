import { Flex } from "@chakra-ui/react";

const Step = ({text, images, stepNum, displayNum}: {text: string, images?: string[], stepNum: number, displayNum: number}) => {

    return (
        <Flex display={stepNum == displayNum ? "block": "none"}>
            {text}
        </Flex>
    )
}

export default Step