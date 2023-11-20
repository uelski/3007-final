import {useState, useEffect} from 'react'
import { Flex, Text, Button } from '@chakra-ui/react';
import { Steps } from './data/steps';
import Step from './Step';

const StepController = () => {
    const [stepDisplay, updateStep] = useState(1)

    const handleNextClick = () => {
        if (stepDisplay < 17) {
            const newStep = stepDisplay + 1
            updateStep(newStep)
        }
    }

    const handlePrevClick = () => {
        if (stepDisplay > 1) {
            const newStep = stepDisplay - 1
            updateStep(newStep)
        }
    }

    return (
        <Flex>
            <Button onClick={handlePrevClick}>Previous</Button>
            {
                Steps.map((step) => {
                    return (
                        <Step stepNum={step.stepNum} displayNum={stepDisplay} text={step.text} images={step.images} />
                    )
                })
            }
            <Button onClick={handleNextClick}>Next</Button>
        </Flex>
    )
}

export default StepController;