import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card
      className={`bg-[#1E293B] border-none intersect:-motion-translate-x-in-25`}
    >
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
        <CardDescription className="text-[#E2E8F0]">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;
