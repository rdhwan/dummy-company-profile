import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16">
          404 - Page Not Found
        </h1>
        <p className="text-xl mb-8">
          Oops! It seems like you've gone into an unknown place. The page you're
          looking for doesn't exist in the blockchain.
        </p>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button className="bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white w-full sm:w-auto">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
