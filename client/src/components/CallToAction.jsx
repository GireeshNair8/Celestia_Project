import { Button } from 'flowbite-react';
import experienceImg from '../assets/images/experience.png'
export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Know more about interstellar travel...
            </h2>
            <p className='text-gray-500 my-2'>
                Have a look at the most advanced facilities
            </p>
            <Button gradientDuoTone='pinkToOrange' className='rounded-br-none rounded-bl-none'>
                <a href="https://science.nasa.gov/missions/voyager-program/10-things-going-interstellar/" target='_blank' rel='noopener noreferrer'>
                    Explore
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={experienceImg} />
        </div>
    </div>
  )
}