import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center intersect:motion-preset-slide-down-sm">
          About CryptoScope
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 intersect:motion-preset-slide-down-sm motion-delay-100">
          <div>
            <h2 className="text-3xl font-bold text-[#00CECE] mb-4">
              Our Mission
            </h2>
            <p className="text-lg mb-6">
              At CryptoScope, we're on a mission to demystify the world of
              cryptocurrency and empower investors with cutting-edge tools and
              insights. We believe that everyone should have access to the
              opportunities presented by digital assets, backed by robust
              analytics and real-time data.
            </p>
            <Button className="bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white">
              Join Our Community
            </Button>
          </div>
          <img
            src="/assets/teams.jpg"
            alt="CryptoScope Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="mb-16 intersect:motion-preset-slide-down-sm motion-delay-200">
          <h2 className="text-3xl font-bold text-[#00CECE] mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            Founded in 2025, CryptoScope emerged from a group of passionate
            crypto enthusiasts and seasoned financial experts. We recognized the
            need for a platform that could provide both novice and experienced
            investors with the tools they need to navigate the complex and
            fast-paced world of cryptocurrency.
          </p>
          <p className="text-lg">
            Since our inception, we've been dedicated to developing innovative
            solutions that make crypto investing more accessible, informed, and
            secure. Our team's diverse background in finance, technology, and
            data science allows us to approach cryptocurrency from multiple
            angles, ensuring a comprehensive and user-friendly experience for
            our clients.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#00CECE] mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg space-y-4">
            <li>
              <b>Innovation:</b> We're always pushing the boundaries of what's
              possible in crypto analytics.
            </li>
            <li>
              <b>Transparency:</b> We believe in clear, honest communication
              with our users and in the crypto space.
            </li>
            <li>
              <b>Education:</b> We're committed to helping our users understand
              and navigate the crypto market confidently.
            </li>
            <li>
              <b>Security:</b> Protecting our users' data and investments is our
              top priority.
            </li>
            <li>
              <b>Community:</b> We foster a supportive community of crypto
              enthusiasts and experts.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
