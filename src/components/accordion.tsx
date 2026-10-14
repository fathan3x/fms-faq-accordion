import { cn } from "cn";
import { useState } from "preact/hooks";

import iconPlus from "../assets/icon-plus.svg";
import iconMinus from "../assets/icon-minus.svg";

type AccordionProps = {
  title: string;
  content: string;
};

export function Accordion(props: AccordionProps) {
  const style = {
    "bg-purple-100": "bg-[hsl(275,100%,97%)]",
    "text-purple-100": "text-[hsl(275,100%,97%)]",
    "text-purple-950": "text-[hsl(292,42%,14%)]",
    "accordion-link": "hover:text-[hsl(281,83%,54%)] cursor-pointer",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10 py-2">
      <div className="flex items-center justify-between">
        <p
          className={cn(style["accordion-link"])}
          style={{ fontWeight: "700" }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {props.title}
        </p>
        {isOpen ? <img src={iconMinus} /> : <img src={iconPlus} />}
      </div>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className={cn(style["text-purple-950"], "pt-4 pb-6 opacity-60")}>
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
}
