import {useState} from 'react'
import { Flex, Button, Progress } from '@chakra-ui/react';
import { Steps } from './data/steps';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import Step, {FinalStep} from './Step';
import './App.css'

const StepController = () => {
    const [stepDisplay, updateStep] = useState(1)

    const handleNextClick = () => {
        if (stepDisplay < 23) {
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
        <>
            <Flex w={'100%'} padding={'1rem'}>
                <Progress colorScheme={"blackAlpha"} value={(stepDisplay / 23)*100} width={'100%'} />
            </Flex>
            <Flex alignItems={'flex-start'}>
            <Button opacity={stepDisplay === 1 ? '0' : '1'} leftIcon={<ArrowBackIcon />} disabled={true} className='primary-cta' onClick={handlePrevClick}>Previous</Button>
            { (stepDisplay <= 22) ? 
                Steps.map((step) => {
                    return (
                        <Step key={step.stepNum} link={step.link} code={step.code} stepNum={step.stepNum} displayNum={stepDisplay} text={step.text} image={step.image} />
                    )
                }) :(
                    <FinalStep stepNum={23} displayNum={stepDisplay}/>
                )
            }
            <Button opacity={stepDisplay === 23 ? '0' : '1'} rightIcon={<ArrowForwardIcon />} className='primary-cta' onClick={handleNextClick}>Next</Button>
        </Flex>
        </>
    )
}

export default StepController;