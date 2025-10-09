import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ReactbitsComponent/accordion";

function Faq() {
  return (
    <div className='relative w-screen h-[100vh] bg-black p-8'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-6xl font-bold text-white'>FAQ</h1>
                <p className='text-2xl text-center text-white'>Book a Demo and See <br /> the agents in action!</p>
            </div>
            <div className='p-4 w-2/3 text-4xl text-white'>
            <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Who Can Use AI Sales Agents?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, exercitationem.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, quod?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Lorem ipsum dolor sit amet consectetur.</AccordionTrigger>
        <AccordionContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptate!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Lorem ipsum dolor sit amet consectetur.</AccordionTrigger>
        <AccordionContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptate!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Lorem ipsum dolor sit amet consectetur.</AccordionTrigger>
        <AccordionContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptate!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
            </div>
        </div>

    </div>
  )
}

export default Faq