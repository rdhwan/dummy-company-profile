import { Card, CardContent } from "./ui/card";

type CryptoCardProps = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
};

const CryptoCard = ({ id, name, price, symbol, image }: CryptoCardProps) => {
  return (
    <Card
      key={id}
      className="w-full bg-[#0F172A] border-none overflow-hidden intersect:-motion-translate-y-in-25"
    >
      <CardContent className="p-6 flex items-center">
        <img
          src={image}
          alt={symbol}
          width={50}
          height={50}
          className="rounded-full mr-4"
        />
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-[#00CECE]">{symbol}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-white">${price}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
