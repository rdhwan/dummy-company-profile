import { Button } from "@/components/ui/button";
import CryptoCard from "@/components/crypto-card";

import { type Trending } from "@/types/trending";
import { ArrowRight, BarChart3, Loader, Lock, Zap } from "lucide-react";

import useSWR from "swr";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import FeatureCard from "@/components/feature-card";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-20 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Unlock the Power of
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#00CECE] delay-300 motion-preset-blur-right-md">
            Cryptocurrency
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          CryptoScope provides cutting-edge tools and insights for the modern
          crypto investor.
        </p>
        <Button className="bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white text-lg px-8 py-6 delay-500 motion-preset-expand">
          Start Exploring <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/assets/company.jpg"
            alt="About CryptoScope"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="p-4 md:p-0 md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            About CryptoScope
          </h2>
          <p className="text-lg mb-6">
            CryptoScope is at the forefront of cryptocurrency innovation. Our
            team of experts is dedicated to providing you with the most accurate
            and timely information to navigate the complex world of digital
            assets.
          </p>
          <Link to={"/about"}>
            <Button className="bg-[#00CECE] hover:bg-[#00B3B3] text-white">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-[#00CECE]" />,
      title: "Advanced Analytics",
      description:
        "Get deep insights into market trends and token performance.",
    },
    {
      icon: <Lock className="h-8 w-8 text-[#00CECE]" />,
      title: "Secure Transactions",
      description: "Latest security measures to protect your investments.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#00CECE]" />,
      title: "Real-time Updates",
      description:
        "Stay informed with instant notifications on market changes.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const RTUpdates = () => {
  const { data, error, isLoading } = useSWR<Trending>(
    "https://api.coingecko.com/api/v3/search/trending",
    (url) => fetch(url).then((r) => r.json()),
    {
      refreshInterval: 1000 * 1000 * 60, // supaya quota gak limit
      revalidateOnFocus: false,
    }
  );

  return (
    <section className="py-20 px-4 bg-[#1E293B]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Trending Crypto Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* crypto card mapping abis swr */}

          {isLoading && (
            <div className="flex flow-row h-8 w-full items-center justify-center">
              <p>Loading...</p> <Loader />
            </div>
          )}

          {error && (
            <div className="flex h-8 items-center justify-center">
              <p>Error fetching data. Please refresh the page</p>
            </div>
          )}

          {data &&
            data.coins.map((coin) => (
              <CryptoCard
                key={coin.item.id}
                id={coin.item.id}
                name={coin.item.name}
                price={coin.item.data.price}
                symbol={coin.item.symbol}
                image={coin.item.large}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  const [isDummyFilled, setIsDummyFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest crypto insights and
          updates.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Input
            ref={inputRef}
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-96 bg-[#1E293B] text-white border-[#00CECE] focus:border-[#6C5CE7]"
          />
          <Button
            className="w-full md:w-auto bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white"
            onClick={() => {
              // dummy check for email validation
              if (
                inputRef.current?.value != "" &&
                /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(
                  inputRef.current?.value || ""
                )
              ) {
                setIsDummyFilled(true);
              }
            }}
          >
            Subscribe
          </Button>
        </div>

        <div className="mt-8">
          {isDummyFilled && (
            <p className="text-[#00CECE]">Thank you for subscribing!</p>
          )}
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <RTUpdates />
      <AboutSection />
      <FeaturesSection />
      <Newsletter />
    </>
  );
};

export default LandingPage;
