
export interface StepsI {
    text: string
    stepNum: number
    latex?: string 
    image?: string
}

import Step1Image from '../../src/assets/step1.png'
import Step2Image from '../../src/assets/step2.jpg'
import Step3Image from '../../src/assets/step3.jpg'
import Step9Image from '../../src/assets/step9.png'
import Step10Image from '../../src/assets/step10.png'
import Step11Image from '../../src/assets/step11.png'
import Step12Intro from '../../src/assets/step12-into.png'
import Step12Image1 from '../../src/assets/step12_1.jpg'
import Step12Image2 from '../../src/assets/step12_2.jpg'
import Step14Image from '../../src/assets/step14.jpg'
import Step16Image from '../../src/assets/step16.png'


export const Steps: StepsI[] = [
    {
        text: "intro here",
        stepNum: 1
    },
    {
        text: "When comparing the gradient to the level sets in the function h(x,y) = x^2+xy+y^2 we see that the direction of the vector is perpendicular to the level set at any point along it. The same is true when testing any other level set and moving around to different points. An example can be seen in Figure 1 below.",
        stepNum: 2,
        image: Step1Image
    },
    {
        text: "We also notice along each level set the height does not change when moving perpendicular to the direction of the gradient vector. Each point along a single level set is the same surface height.",
        stepNum: 3,
        image: Step2Image
    },
    {
        text: "Given the two previous facts we can deduce that the direction the gradient is pointing, that is perpendicular to the continuous height of a level set, is in the direction in which the function f(x,y) is increasing the fastest since the fastest way to move away from a straight line is to move perpendicular to it. If the surface is not changing in height, the quickest way to move away from the surface is straight up in a perpendicular direction.",
        stepNum: 4,
        image: Step3Image
    },
    {
        text: "A gradient can be constructed from multivariate functions in the form of h from R^n to R, meaning multiple inputs and a single output. Since the function we are given is in the form of R^2 to R^2, (x,y) = <3x+y+1, 2x-y-1> meaning it has two inputs and TWO outputs, we cannot construct the gradient on this function directly.",
        stepNum: 5
    },
    {
        text: "However, we can create a multivariate function using the given function f(x,y), and the length of the output vector ||<a, b>|| = sqrt(a^2+b^2). For example given f(3,1) we can compute the length of the vector as sqrt(137).",
        stepNum: 6
    },
    {
        text: "We can use this previous calculation ||<a, b>|| = sqrt(a^2+b^2) to compute the squared length of the vector, removing the messy square root from the result. If we create a new multivariate function using this result, ||f(x,y)||^2 = L(x,y), we can now see a function in the form of R^2 to R: L(x,y) = (3x+y+1)^2 +( 2x-y-1)^2.",
        stepNum: 7
    },
    {
        text: "Since L(x,y) is using the squared length of the vector from f(x,y), notice the output with the same input from before (3,1) will be the square, 137, of the previous output sqrt(137).",
        stepNum: 8
    },
    {
        text: "Relating back to the main purpose of this process, if both a and b in the output vector <a,b> are 0 the output vector will have zero length: ||<0,0>|| = sqrt(0^2+0^2) = 0. We can find a pair of (x,y) input values to make this true, which will also solve the system of equations posed at the beginning!",
        stepNum: 9
    },
    {
        text: "Now that we have a multivariate function in the form of R^2 to R, namely L(x,y) = (3x+y+1)^2 +( 2x-y-1)^2, we can compute the gradient of this function with two inputs and ONE output using the partial derivatives. Notice this is the gradient in the form of R^2 to R^2and outputs a vector.",
        stepNum: 10,
        image: Step9Image
    },
    {
        text: "We can compare this gradient function to the matrix multiplication formula using the transpose of the matrix A given in the beginning of the exercise.",
        stepNum: 11,
        image: Step10Image
    },
    {
        text: "Here we see a clear relationship between the previous steps! This is exciting because we can use matrix multiplication to find minimum values in a multivariate function using a similar process in a way that makes it much easier to compute, for example creating simple Python code instead of partial derivative calculations.",
        stepNum: 12,
        image: Step11Image
    },
    {
        text: "The general formula for the method of gradient descent to find a local minimum for a function g(x,y) in the form of g:R^2 to R is given below:",
        stepNum: 13,
        image: Step12Intro
    },
    {
        text: "Given a starting point of a_0 we can generate a sequence of points by subtracting the gradient from each previous point at that specific point (a_n) multiplied by a step size, eta. This means we take a point and subtract a vector in the opposite direction of the steepest direction with a magnitude calculated from the partial derivatives of the original function, in this case g(x,y). Since we are subtracting the vector the gradient produces we are moving in the opposite direction of the steepest increasing direction, thus moving down. As the points approach a minimum the partial derivatives will get smaller and smaller due to the fact they are calculated from the slope of the function at that given point and will eventually approach 0, meaning the gradient will reach a length of 0. Figure 2 below demonstrates a basic example of using the method of gradient descent on a simpler function approaching a minimum from both directions.",
        stepNum: 14,
        image: Step12Image1
    },
    {
        text: "If eta, the step size, is too large the algorithm could diverge from a critical pair of values at a minimum by taking infinite steps without resolving with the gradient length being 0. This could be seen in code, an infinite loop could arise out of never meeting the condition to stop calculations, in particular when the gradient length is at or incredibly close to 0. With too small of a step size it could take much longer to calculate a local minimum. Figure 3 demonstrates issues that could arise from too large or too small of a value for eta on a simple function. ",
        stepNum: 15,
        image: Step12Image2
    },
    {
        text: "As the provided Python code demonstrates, the input pairs (x,y) converge towards a critical pair of values, (0, -1), as the value of the squared length function L(x,y) is decreasing towards 0.",
        stepNum: 16
    },
    {
        text: "To reiterate why we can use this method of gradient descent on L(x,y) and not on the given function f(x,y), it is because L(x,y) has a single output in the form of R^2 to R which we can use to determine the partial derivatives for the gradient from, whereas the function f(x,y) outputs two values in the form of R^2 to R^2. The gradient can only be constructed from a function with a single output.",
        stepNum: 17,
        image: Step14Image
    },
    {
        text: "In summation of the previous few steps, the method of gradient descent will result in a local minimum, and in our case the gradient function is created using the squared length of the output vector from our original function, f(x,y) as L(x,y). This relationship is important. The method of gradient descent creates a sequence of points which results in the output vector decreasing to 0 as you subtract the gradient from each point. When the minimum is reached through the method of gradient descent we also found that the output of L(x,y) is approaching 0. This allows us to analyze the original function, f(x,y), since L(x,y) was created from the original function. Per step 8, the only way the squared length of the output vector, as defined by L(x,y), is 0, will be when both a and b will equal 0. Since L(x,y) was created from f(x,y), these same values which make L(x,y)=0 can be used as the critical pair of values of (x,y) that will make f(x,y) = <0,0>.",
        stepNum: 18
    },
    {
        text: "Looking at the provided results of the Python code we can estimate that at the point (0,-1) f(x,y) will equal <0,0>. To demonstrate the previous point, of the relationship between f(x,y) and L(x,y), we can prove this same pair of (x,y) values will make L(x,y)=0.",
        stepNum: 19,
        image: Step16Image
    },
    {
        text: "It is worth noting if the given function, f(x,y), did not have a solution for the system of equations, where the output vector is <0,0>, we could have taken similar steps, creating the square length of the output vector L(x,y), determining the partial derivatives, starting at a given point and calculating a sequence of points using the gradient and found that the (x,y) pair does not converge to a pair of critical values that would make L(x,y)=0.",
        stepNum: 20
    },
    {
        text: "If you had to be a letter of the alphabet, what letter would you be? Cursive or print? Upper case or lower case? I would have to choose a lowercase v, preferably in a shade of dark green. Yes, my last name does start with a V, thus a lifelong affinity for the letter. I like the lowercase look as it is more subdued, and in line with some of the experimental electronic music I am a fan of.",
        stepNum: 21
    }
  ]