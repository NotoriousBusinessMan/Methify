"use client"


import { useState,useEffect } from 'react';


type Option = {
    operation: 'add' | 'subtract';
    value: number;
};


export default function bodyFile(){


    const [randomNumbers, setRandomNumbers] = useState({
        number1: 0,
        number2: 0
    });

    const [shuffledOptions, setShuffledOptions] = useState<Option[]>([]);
    const [point,setPoint] = useState(0)
    
    const generateRandomNumber = () => {
        const min = 1;
        const max = 100;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    const generateNewNumbers = () => {
        setRandomNumbers({
            number1: generateRandomNumber(),
            number2: generateRandomNumber()
        });
    };

    const handleLiClick = (isCorrect: boolean) => {
        if (isCorrect) {
          setPoint(point + 1); // Add one point for correct answer
        } else {
          setPoint(Math.max(0, point - 1)); // Subtract one point, but don't go below 0
        }
        generateNewNumbers(); // Generate new numbers after clicking
    };
    
    useEffect(() => {
        // Generate random numbers on the client side after the component mounts
        generateNewNumbers();
    }, []);


    useEffect(() => {
        // Shuffle options on the client side whenever randomNumbers change
        const options: Option[] = [
          { operation: 'subtract', value: 10 },
          { operation: 'add', value: 45 },
          { operation: 'subtract', value: 20 },
          { operation: 'add', value: 0 }
          // Add more options as needed
        ];
    
        const shuffleArray = (array: Option[]) => {
          const shuffledArray = [...array];
          for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
          }
          return shuffledArray;
        };
    
        setShuffledOptions(shuffleArray(options));
      }, [randomNumbers]);
    
      const calculateResult = (option: Option) => {
        switch (option.operation) {
          case 'add':
            return randomNumbers.number1 + randomNumbers.number2 + option.value;
          case 'subtract':
            return randomNumbers.number1 + randomNumbers.number2 - option.value;
          default:
            return 0;
        }
      };


    return (
        <>
            <section className='w-full h-screen flex flex-col text-center p-9'>
                <div className="top">
                    <h2 className='font-mono text-2xl'>Your Points : {point}</h2>
                </div>

                <div className="center flex justify-between items-center w-1/5 my-20 mx-auto">
                    <h3 className='text-5xl'>{randomNumbers.number1}</h3>
                    <h5 className='text-3xl'>+</h5>
                    <h3 className='text-5xl'>{randomNumbers.number2}</h3>
                </div>

                <div className="bottom">
                    <ul className='w-2/5 flex justify-between items-center my-20 mx-auto'>
                        {shuffledOptions.map((option, index) => (
                            <li onClick={() => handleLiClick(calculateResult(option) === randomNumbers.number1 + randomNumbers.number2)} key={index} className={`block w-20 h-10 rounded-xl bg-stone-900 flex justify-center items-center text-center ${calculateResult(option) === randomNumbers.number1 + randomNumbers.number2 ? 'green' : 'red'}`}>
                                <h4>{calculateResult(option)}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}



{/* <li key={index} className='block w-20 h-10 rounded-xl bg-stone-900 flex justify-center items-center text-center'>
                                
                                <h4 className='block'>{calculateResult(option)}</h4>
                            </li> */}