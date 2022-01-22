const quotes = [
  {
    quote: "You can't make time. You can make a schedule.",
    author: "Noah Kagan",
  },
  {
    quote: "Make a promise you can't keep. And be sure to keep it.",
    author: "Sophia Amoruso",
  },
  {
    quote: "Explore the route while enjoying your free time.",
    author: "Tim Ferriss",
  },
  { quote: "You don't have to know all the answers.", author: "BJ Miller" },
  { quote: "hostile to strangers", author: "Jason Nemer" },
  { quote: "Quit carbohydrates and sugar.", author: "Peter Attia" },
  {
    quote: "'What? You too? I thought it was just me', friendship sprouts.",
    author: "C.S. Lewis",
  },
  {
    quote: "Do what others consider too reckless.",
    author: "Adam Gazzaley",
  },
  {
    quote:
      "Listen to the minor suggestions. And whatever you do, do it for a long time.",
    author: "Derek Sivers",
  },
  {
    quote: "To leave an impact, focus on really small details.",
    author: "Alexis Ohanian",
  },
  {
    quote: "Forget what you can't do even tomorrow.",
    author: "Matt Mullenweg",
  },
  {
    quote: "When the wound is exposed, a healer must appear.",
    author: "Morgan Spurlock",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[parseInt(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
