import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ObserverProvider from "@/providers/observer";
import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>
      <ScrollRestoration />
      <ObserverProvider>
        <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-[#E2E8F0]">
          <Header />
          <main className="pt-16">
            <Outlet />
          </main>
          <Footer />
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Warning!</DialogTitle>
              <DialogDescription>
                <p className="my-8">
                  Website ini hanya fiktif belaka ditujukan untuk{" "}
                  <b>Tes Asisten Laboratorium - Pengantar Teknologi Internet</b>
                  . Dibuat oleh Muhammad Fathan Ridhwan (00000069524).
                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </ObserverProvider>
    </>
  );
};

export default App;
