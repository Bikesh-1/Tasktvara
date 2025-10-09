"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("p-1 m-2 rounded-3xl border", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-2 px-2 text-xl font-medium text-foreground transition-all hover:underline text-left",
        "[&[data-state=open]>svg]:rotate-45",
        "transition-transform duration-300 ease-in-out",
        className
      )}
      {...props}>
      {children}
      <Plus
        className="w-4 h-4 transition-transform duration-300 ease-in-out shrink-0 text-primary" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-xl text-foreground transition-all",
      "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
    )}
    {...props}>
    <div
      className={cn(
        "flex items-center p-5 w-full backdrop-blur-sm bg-muted/60 border-border animate-shake-smooth",
        className
      )}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };