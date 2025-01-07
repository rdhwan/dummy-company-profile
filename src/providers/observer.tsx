import { Observer } from "tailwindcss-intersect";
import { useEffect } from "react";

const ObserverProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Observer.start();
  }, []);

  return <>{children}</>;
};

export default ObserverProvider;
