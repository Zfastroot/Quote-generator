//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [
      {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
      },
      {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
      },
      {
        quote: "If you want to achieve greatness stop asking for permission.",
        author: "Unknown"
      },
      {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
      },
      {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
      },
      {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
      },
      {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
      },
      {
        quote: "We can't help everyone, but everyone can help someone.",
        author: "Ronald Reagan"
      },
      {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
      },
      {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
      },
      {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
      },
      {
        quote: "Do not let what you cannot do interfere with what you can do.",
        author: "John Wooden"
      },
      {
        quote: "You have to be odd to be number one.",
        author: "Dr. Seuss"
      },
      {
        quote: "Imagination is more important than knowledge.",
        author: "Albert Einstein"
      },
      {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
      },
      {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
      },
      {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
      },
      {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
      },
      {
        quote: "The true test of leadership is how well you function in a crisis.",
        author: "Brian Tracy"
      }
    ] ;

 btn.addEventListener('click',function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author
 })