import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-4">Data Privacy</h1>
      <Accordion type="single" collapsible className="flex flex-col gap-4 ">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is FinServe?</AccordionTrigger>
          <AccordionContent className="px-8">
            FinServe is a financial services company that provides a wide range
            of financial solutions to individuals and businesses. Our services
            include banking, investments, insurance, loans, and financial
            planning.{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How can FinServe help me manage my finances?
          </AccordionTrigger>
          <AccordionContent className="px-8">
            FinServe offers personalized financial advice and solutions tailored
            to your specific needs and goals. Whether you`re saving for
            retirement, buying a home, or starting a business, our team of
            experts can help you make informed financial decisions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What types of accounts can I open with FinServe?
          </AccordionTrigger>
          <AccordionContent className="px-8">
            At FinServe, you can open a variety of accounts, including checking
            accounts, savings accounts, certificates of deposit (CDs), money
            market accounts, and retirement accounts such as IRAs and 401(k)s.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How secure is my information with FinServe?
          </AccordionTrigger>
          <AccordionContent className="px-8">
            Protecting your privacy and security is our top priority at
            FinServe. We use advanced encryption and security measures to
            safeguard your personal and financial information, and we adhere to
            strict industry standards and regulations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How secure is my information with FinServe?
          </AccordionTrigger>
          <AccordionContent className="px-8">
            Protecting your privacy and security is our top priority at
            FinServe. We use advanced encryption and security measures to
            safeguard your personal and financial information, and we adhere to
            strict industry standards and regulations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How secure is my information with FinServe?
          </AccordionTrigger>
          <AccordionContent className="px-8">
            Protecting your privacy and security is our top priority at
            FinServe. We use advanced encryption and security measures to
            safeguard your personal and financial information, and we adhere to
            strict industry standards and regulations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
