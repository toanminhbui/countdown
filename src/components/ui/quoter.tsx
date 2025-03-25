'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
});

const STARTUP_QUOTES = [
  {
    text: 'The best startup ideas seem at first like bad ideas. If they were obviously good ideas, someone would have done them already.',
    author: 'Paul Graham'
  },
  {
    text: 'Make something people want.',
    author: 'Paul Graham'
  },
  {
    text: 'The way to get startup ideas is not to try to think of startup ideas. It\'s to look for problems, preferably problems you have yourself.',
    author: 'Paul Graham'
  },
  {
    text: 'Launch fast and iterate. The initial version of your product should be embarrassingly simple.',
    author: 'Paul Graham'
  },
  {
    text: 'It\'s better to have 100 people who love you than a million who sort of like you.',
    author: 'Paul Graham'
  },
  {
    text: 'The best ideas come from direct experience, especially direct experience of needs.',
    author: 'Paul Graham'
  },
  {
    text: 'If you can\'t yet do what you want, you should either learn how or work with someone who can.',
    author: 'Paul Graham'
  },
  {
    text: 'It\'s hard to beat a person who never gives up',
    author: 'Babe Ruth'
  },
  {
    text: 'Success is not final, failure is not fatal: it is the courage to continue that counts',
    author: 'Winston Churchill'
  },
  {
    text: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs'
  },
  {
    text: 'Don\'t watch the clock; do what it does. Keep going',
    author: 'Sam Levenson'
  },
  {
    text: 'Ideas are the beginning points of all fortunes',
    author: 'Napoleon Hill'
  },
  {
    text: 'The biggest risk is not taking any risk',
    author: 'Mark Zuckerberg'
  },
  {
    text: 'Move fast and break things. Unless you are breaking stuff, you are not moving fast enough',
    author: 'Mark Zuckerberg'
  },
  {
    text: 'The question I ask myself almost every day is, \'Am I doing the most important thing I could be doing?\'',
    author: 'Mark Zuckerberg'
  },
  {
    text: 'If you\'re not embarrassed by the first version of your product, you\'ve launched too late',
    author: 'Reid Hoffman'
  },
  {
    text: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'Reid Hoffman'
  },
  {
    text: 'All humans are entrepreneurs not because they should start companies but because the will to create is encoded in human DNA',
    author: 'Reid Hoffman'
  },
  {
    text: 'Entrepreneurship is jumping off a cliff and assembling an airplane on the way down',
    author: 'Reid Hoffman'
  },
  {
    text: 'The only way to do something great is to love what you do',
    author: 'Steve Jobs'
  }
];

const StartupQuote: React.FC = () => {
  const [quote, setQuote] = useState(STARTUP_QUOTES[0]);
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * STARTUP_QUOTES.length);
    setQuote(STARTUP_QUOTES[randomIndex]);
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto bg-background border-border">
      <CardContent className="p-6">
        <blockquote className={`${playfair.className} text-xl italic text-center text-foreground mb-4 leading-relaxed`}>
          &ldquo;{quote.text}&rdquo;
        </blockquote>
        <p className={`${playfair.className} text-md font-medium text-center text-muted-foreground`}>
          - {quote.author}
        </p>
      </CardContent>
    </Card>
  );
};

export default StartupQuote;