import "@fontsource-variable/work-sans";
import { cn } from "cn";

import patternDesktop from "./assets/background-pattern-desktop.svg";
import patternMobile from "./assets/background-pattern-mobile.svg";
import iconStar from "./assets/icon-star.svg";
import { Accordion } from "./components/accordion";

export function App() {
  const style = {
    "bg-purple-100": "bg-[hsl(275,100%,97%)]",
    "text-purple-100": "text-[hsl(275,100%,97%)]",
    "text-purple-950": "text-[hsl(292,42%,14%)]",
  };
  return (
    <main
      className={cn(
        style["bg-purple-100"],
        "w-screen min-h-screen relative flex flex-col items-center justify-center font-['Work_Sans_Variable'] p-6",
      )}
    >
      <img
        src={patternDesktop}
        className="hidden lg:block lg:absolute top-0 left-0 w-full z-1"
      />
      <img
        src={patternMobile}
        className="absolute block lg:hidden -top-20 left-0 w-full z-1"
      />
      <section className="p-8 bg-white relative z-2 lg:-mt-10 rounded-lg max-w-xl space-y-6">
        <div className="flex items-center gap-4">
          <img src={iconStar} />
          <p
            className={cn(style["text-purple-950"], "text-4xl")}
            style={{ fontWeight: 700 }}
          >
            FAQs
          </p>
        </div>
        <div className="lg:max-h-100 overflow-y-scroll">
          {accordions.map((accordion) => (
            <Accordion
              key={accordion.title}
              title={accordion.title}
              content={accordion.content}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

const accordions = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    content:
      "Frontend Mentor offer realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and Javascript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor Free?",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid hic aspernatur dolor sunt adipisci nam tempora iusto necessitatibus tempore?",
  },
  {
    title: "Can i use Frontend Mentor projects in my portfolio?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laboriosam ea hic reiciendis totam nihil laborum nobis porro beatae voluptas nostrum dolores voluptatum repudiandae tempore, facere aliquid atque maiores quibusdam! Voluptatum vitae molestiae suscipit expedita nihil repudiandae in incidunt quos!",
  },
  {
    title: "How can i get help if i'm stuck on a challenge?",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur totam fuga voluptas, dolore saepe rerum dolorem quasi corporis ipsa nesciunt, at non quisquam minus, magni perspiciatis consectetur tempore? Ducimus quae eum repellat, alias corrupti autem eveniet aperiam voluptates maxime error nemo? Voluptates modi atque beatae. Perferendis, repudiandae? Aspernatur, saepe nisi.",
  },
];
