
import React, { useState } from 'react';
import { NeumorphicCard } from './components/NeumorphicCard';
import { NeumorphicButton } from './components/NeumorphicButton';
import { AppleIcon, WindowsIcon, ChevronDownIcon } from './components/Icons';

// Accordion Item Component for the FAQ section
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        onClick={onClick}
        className="w-full text-left py-6 px-2 flex justify-between items-center transition-colors duration-300"
      >
        <span className="text-lg font-semibold text-gray-700">{question}</span>
        <ChevronDownIcon
          className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 text-gray-600">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Why real-time vs. a regular AI notetaker?",
      answer: "Unlike regular AI notetakers that work after your meeting ends, this provides real-time meeting intelligence during your calls. This means you can handle objections, answer technical questions, and perform better during high-stakes conversations.",
    },
    {
      question: "Who is this for?",
      answer: "It's perfect for students, professionals, sales teams, recruiters, consultants, executives, and anyone who needs to perform well in meetings where you can't afford to look unprepared.",
    },
    {
      question: "Is it free?",
      answer: "Yes, you can use the core features for free. A pro plan gives you access to the latest models and unlimited AI responses.",
    },
    {
      question: "How is it invisible in meetings?",
      answer: "It never joins your calls as a participant, doesn't appear in meeting recordings, and won't show up in screen shares. It captures audio in the background and provides a discreet overlay only you can see.",
    },
  ];
  
  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800 antialiased">
      <header className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-700" style={{textShadow: '1px 1px 2px #ffffff, -1px -1px 2px #bebebe'}}>
            NeuCluely
          </h1>
          <nav className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-gray-800">Pricing</a>
            <a href="#" className="hover:text-gray-800">Enterprise</a>
            <a href="#" className="hover:text-gray-800">Learn</a>
          </nav>
          <NeumorphicButton className="hidden md:flex !py-2 !px-4">
            Get Started Free
          </NeumorphicButton>
        </div>
      </header>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="text-center py-20 md:py-32 px-4">
          <div className="max-w-4xl mx-auto">
             <h1 className="text-5xl md:text-7xl font-bold text-gray-700 tracking-tighter" style={{textShadow: '2px 2px 4px #bebebe, -2px -2px 4px #ffffff'}}>
              Invisible AI That
              <br/>
              <span className="mt-2 block">Thinks for You</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              This is an undetectable desktop app that gives you the answers you didn't study for in every meeting and conversation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <NeumorphicButton className="w-full sm:w-auto">
                <AppleIcon className="w-6 h-6 mr-2" />
                Get for Mac
              </NeumorphicButton>
              <NeumorphicButton className="w-full sm:w-auto">
                <WindowsIcon className="w-6 h-6 mr-2" />
                Get for Windows
              </NeumorphicButton>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 bg-[#e0e0e0]">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-blue-600 font-semibold">AI second brain for every meeting</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-700" style={{textShadow: '1px 1px 2px #ffffff, -1px -1px 2px #bebebe'}}>
              Thinking is the slowest thing you do.
              <br/>
              Let AI do it for you instead.
            </h2>
            <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
              <NeumorphicCard className="p-8">
                <h3 className="text-2xl font-bold text-gray-700">Records your meetings</h3>
                <p className="mt-4 text-gray-600">
                  The app listens to your meetings in the background and takes real-time notes without joining, ensuring complete privacy and discretion.
                </p>
              </NeumorphicCard>
              <NeumorphicCard className="p-8">
                <h3 className="text-2xl font-bold text-gray-700">Answers in real-time</h3>
                <p className="mt-4 text-gray-600">
                  It responds with context of what's happening in a conversation and what's on your screen, giving you an edge when you need it most.
                </p>
              </NeumorphicCard>
            </div>
          </div>
        </section>

        {/* Inset Screen Demo */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <NeumorphicCard variant="concave" className="p-4 sm:p-8">
              <div className="aspect-video bg-[#e0e0e0] rounded-lg p-6">
                <h3 className="text-xl md:text-3xl font-bold text-gray-600">Your App Interface Here</h3>
                <p className="mt-4 text-gray-500">
                  This inset panel represents a screen or an embedded application view, styled with Neumorphic principles.
                </p>
                <div className="mt-8 flex gap-4">
                    <NeumorphicButton className="flex-1">Action 1</NeumorphicButton>
                    <NeumorphicButton className="flex-1">Action 2</NeumorphicButton>
                </div>
              </div>
            </NeumorphicCard>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-24 px-4 bg-[#e0e0e0]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-700" style={{textShadow: '1px 1px 2px #ffffff, -1px -1px 2px #bebebe'}}>
              Frequently Asked Questions
            </h2>
            <NeumorphicCard className="mt-12 p-2 sm:p-6">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onClick={() => handleFaqClick(index)}
                />
              ))}
            </NeumorphicCard>
          </div>
        </section>

      </main>
      
      <footer className="text-center p-10 text-gray-500">
        <p>© 2025 Neumorphic UI Showcase. All rights reserved.</p>
        <p className="text-sm mt-2">Re-imagined with Neumorphism by a world-class React engineer.</p>
      </footer>
    </div>
  );
};

export default App;
