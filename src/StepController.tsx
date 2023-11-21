import {useState} from 'react'
import { Flex, Button } from '@chakra-ui/react';
import { Steps } from './data/steps';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import Step from './Step';
import './App.css'

const StepController = () => {
    const [stepDisplay, updateStep] = useState(1)

    const handleNextClick = () => {
        if (stepDisplay < 19) {
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
        <Flex alignItems={'flex-start'}>
            <Button opacity={stepDisplay === 1 ? '0' : '1'} leftIcon={<ArrowBackIcon />} disabled={true} className='primary-cta' onClick={handlePrevClick}>Previous</Button>
            {
                Steps.map((step) => {
                    return (
                        <Step key={step.stepNum} stepNum={step.stepNum} displayNum={stepDisplay} text={step.text} image={step.image} />
                    )
                })
            }
            <Button opacity={stepDisplay === 19 ? '0' : '1'} rightIcon={<ArrowForwardIcon />} className='primary-cta' onClick={handleNextClick}>Next</Button>
        </Flex>
    )
}

export default StepController;