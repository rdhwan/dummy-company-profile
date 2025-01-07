import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

type PricingCardProps = {
  name: string;
  price: string;
  features: string[];
};

const PricingCard = ({ name, price, features }: PricingCardProps) => {
  return (
    <Card
      key={name}
      className="flex flex-col justify-between bg-[#1E293B] border-[#00CECE] border-2 intersect:-motion-translate-y-in-25"
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-[#00CECE] mb-6">{price}</p>
        <ul className="space-y-2 text-white">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-[#00CECE] mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link to="/getting-started" className="w-full">
          <Button className="w-full bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white">
            {name === "Enterprise" ? "Contact Sales" : "Get Started"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
