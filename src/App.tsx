import './App.css'
import StepController from './StepController'
import { Flex, Heading, Text, Container, Button } from '@chakra-ui/react'
import PDF from '../src/assets/3007_Final_Report.pdf'

function App() {

  const handleDownload = () => {
    window.open(PDF, "_blank")
  }

  return (
    <Flex flexDir={'column'} alignItems={'center'}>
      <Heading marginBottom={"1rem"} color={"#ffffffde"}>Sam Vredenburgh 3007 Final</Heading>
      <Container marginBottom={"2rem"} maxW={"none"} border={'1px solid #ffffffde'} borderRadius={'20px'} padding={'1rem'}>
        <Text pt={'1rem'} color={"#ffffffde"}>
          Seemingly disparate math techniques and tools can overlap to solve problems in really interesting ways. This final explores the connection between linear-algebra and solving a system of equations, and calculus using a multivariate function and partial derivatives to derive the same answer. Math is cool!
        </Text>
        <Text pt={'1rem'} color={"#ffffffde"}>
          We are given a system of equations that can be expressed as either a matrix equation or a multivariate function. Using the method of gradient descent we can find the minimum of the multivariate function, using this to solve the system of equations.
        </Text>
      </Container>
      <Button className='download' color={"#ffffffde"} onClick={handleDownload} variant='outline' mb={'1rem'}>Download Report</Button>
      <StepController />
    </Flex>
  )
}

export default App
