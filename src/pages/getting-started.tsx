import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle } from "lucide-react";

const GettingStarted = () => {
  const benefits = [
    "Real-time crypto market data and analysis",
    "Personalized portfolio tracking and alerts",
    "Access to exclusive crypto opportunities",
  ];

  return (
    <main className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Get Started with CryptoScope
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="bg-[#1E293B] border-[#00CECE] border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Register Now
              </CardTitle>
              <CardDescription>
                Join CryptoScope and start your crypto journey today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-4"
              >
                <div>
                  <Label className="text-white" htmlFor="fullName">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    className="text-white border-[#00CECE]"
                  />
                </div>
                <div>
                  <Label className="text-white" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="text-white border-[#00CECE]"
                  />
                </div>
                <div>
                  <Label className="text-white" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    className=" text-white border-[#00CECE]"
                  />
                </div>
                <div>
                  <Label className="text-white" htmlFor="confirmPassword">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="text-white border-[#00CECE]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white"
                >
                  Create Account
                </Button>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-center text-white w-full">
                Already have an account?{" "}
                <a href="#" className="text-[#00CECE] hover:underline">
                  Log in
                </a>
              </p>
            </CardFooter>
          </Card>

          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#00CECE] mb-6">
                Why Join CryptoScope?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#00CECE] mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 p-4 bg-[#0F172A] rounded-lg">
              <h3 className="text-xl font-bold text-[#00CECE] mb-2 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Get Started Risk-Free
              </h3>
              <p>
                Sign up now and enjoy a 30-day free trial of our Pro features.
                No credit card required. Experience the full power of
                CryptoScope and take your crypto investing to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GettingStarted;
