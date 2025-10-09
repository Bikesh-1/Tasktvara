import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ReactbitsComponent/accordion";

function Faq() {
  return (
    <div className="relative px-4 py-8 w-full min-h-screen bg-black sm:px-8">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-3xl font-bold text-center text-white sm:text-5xl md:text-6xl">FAQ</h1>
          <p className="mt-2 text-lg text-center text-white sm:text-xl md:text-2xl">
            Book a Demo and See <br className="hidden sm:block" /> the agents in action!
          </p>
        </div>
        <div className="p-2 mt-6 w-full text-base text-white sm:p-4 sm:w-5/6 md:w-2/3 sm:text-2xl md:text-4xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="mb-4 sm:mb-6 md:mb-8">
              <AccordionTrigger>Who Can Use AI Sales Agents?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, exercitationem.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mb-4 sm:mb-6 md:mb-8">
              <AccordionTrigger>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, quod?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="mb-4 sm:mb-6 md:mb-8">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur.</AccordionTrigger>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptate!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="mb-4 sm:mb-6 md:mb-8">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur.</AccordionTrigger>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptate!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="mb-4 sm:mb-6 md:mb-8">
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