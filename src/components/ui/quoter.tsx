import React, { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const STARTUP_QUOTES = [
  {
    text: "It's hard to beat a person who never gives up",
    author: "Babe Ruth"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts",
    author: "Winston Churchill"
  },
  {
    text: "The only way to do great work is to love what you do",
    author: "Steve Jobs"
  },
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work",
    author: "Steve Jobs"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going",
    author: "Sam Levenson"
  },
  {
    text: "The biggest adventure you can ever take is to live the life of your dreams",
    author: "Oprah Winfrey"
  },
  {
    text: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world",
    author: "Harriet Tubman"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it",
    author: "Henry David Thoreau"
  },
  {
    text: "Entrepreneurship is living a few years of your life like most people won't, so that you can spend the rest of your life like most people can't",
    author: "Unknown"
  }
];

const StartupQuote: React.FC = () => {
  // Use useMemo to persist the random quote across re-renders
  const randomQuote = useMemo(() => {
    return STARTUP_QUOTES[Math.floor(Math.random() * STARTUP_QUOTES.length)];
  }, []); // Empty dependency array means this will only run once when component mounts

  return (
    <Card className="w-full max-w-2xl mx-auto bg-background border-border">
      <CardContent className="p-6">
        <blockquote className="text-xl italic text-center text-foreground mb-4">
          "{randomQuote.text}"
        </blockquote>
        <p className="text-md font-semibold text-center text-muted-foreground">
          - {randomQuote.author}
        </p>
      </CardContent>
    </Card>
  );
};

export default StartupQuote;