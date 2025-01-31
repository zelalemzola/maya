import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-5 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions?</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="question-1">
          <AccordionTrigger>What types of properties do you offer?</AccordionTrigger>
          <AccordionContent>
            We provide a wide range of properties, including **apartments, villas, commercial spaces, and off-plan projects** directly from trusted developers.
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="question-3">
          <AccordionTrigger>Can you help with property financing?</AccordionTrigger>
          <AccordionContent>
            Yes! We guide you through **mortgage options, developer payment plans, and financing solutions** to help you secure your dream property.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question-4">
          <AccordionTrigger>Do you handle legal paperwork?</AccordionTrigger>
          <AccordionContent>
            Absolutely! We assist with **contracts, title deeds, and all legal formalities**, ensuring a smooth and hassle-free transaction.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question-5">
          <AccordionTrigger>Can I invest in off-plan projects?</AccordionTrigger>
          <AccordionContent>
            Yes! We offer **early access to pre-launch projects**, helping investors secure the best units at lower prices before market appreciation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
