import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center intersect:motion-preset-slide-down-sm">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 intersect:motion-preset-slide-down-sm motion-delay-100">
          <div>
            <h2 className="text-2xl font-bold text-[#00CECE] mb-4">
              Get in Touch
            </h2>
            <p className="mb-6">
              Have questions or need assistance? Our team is here to help. Fill
              out the form, and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-[#1E293B] text-white border-[#00CECE]"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-[#1E293B] text-white border-[#00CECE]"
              />
              <Input
                type="text"
                placeholder="Subject"
                className="bg-[#1E293B] text-white border-[#00CECE]"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-[#1E293B] text-white border-[#00CECE]"
                rows={5}
              />
              <Button
                type="submit"
                className="w-full bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#00CECE] mb-4">
              Contact Information
            </h2>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:info@cryptoscope.rdhwan.dev"
                className="flex items-center"
              >
                <Mail className="h-5 w-5 text-[#00CECE] mr-2" />
                info@cryptoscope.rdhwan.dev
              </a>
              <p className="flex items-center">
                <Phone className="h-5 w-5 text-[#00CECE] mr-2" />
                +62 858 8495 7332
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 text-[#00CECE] mr-2" />
                Gading Serpong, Kabupaten Tangerang, Banten 15810
              </p>
            </div>

            <div className="bg-[#1E293B] p-4 rounded-lg">
              <h3 className="text-xl font-bold text-[#00CECE] mb-4">
                Our Location
              </h3>
              <div className="aspect-video bg-[#0F172A] flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0530815669663!2d106.61572261092977!3d-6.256737993705639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb56b25975f9%3A0x50c7d605ba8542f5!2sMultimedia%20Nusantara%20University!5e0!3m2!1sen!2sid!4v1736237393158!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    borderRadius: "8px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
