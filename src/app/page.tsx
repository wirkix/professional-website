import Image from "next/image";
import Header from "@/components/Header";
import { getDictionary } from "@/lib/i18n";

export default async function Home() {
  const { t } = await getDictionary();

  return (
    <div className="min-h-screen bg-brand-50 text-brand-950">
      {/* Header with external profile links */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile photo */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-brand-200">
            <Image
              src="/images/alois-wirkes.jpg"
              alt="Alois Wirkes"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            Alois Wirkes
          </h1>
          <p className="text-brand-700 text-lg font-medium mb-2">
            {t.home.specialty}
          </p>
          <span className="inline-block px-3 py-1 mb-4 bg-brand-100 text-brand-600 rounded-full text-sm font-medium">
            {t.home.availableBadge}
          </span>
          <p className="text-brand-600 text-lg max-w-2xl mb-8">
            {t.home.description}
          </p>

          <div className="flex gap-4">
            <a
              href="/cv"
              className="px-6 py-3 bg-brand-700 text-brand-50 rounded-lg font-medium transition duration-200 hover:bg-brand-800"
            >
              {t.home.viewCvButton}
            </a>
            <a
              href="/portfolio"
              className="px-6 py-3 border border-brand-500 text-brand-700 rounded-lg font-medium transition duration-200 hover:bg-brand-100"
            >
              {t.home.viewPortfolioButton}
            </a>
          </div>
        </div>
      </section>

      {/* Social/External Links */}
      <section className="bg-brand-950 text-brand-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-brand-100">
            {t.home.connectHeading}
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="https://www.linkedin.com/in/alois-wirkes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-accent-400 transition duration-200 flex items-center gap-2"
            >
              LinkedIn →
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01e9f20bfb142f07cb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-accent-400 transition duration-200 flex items-center gap-2"
            >
              Upwork →
            </a>
            <a
              href="https://github.com/wirkix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-accent-400 transition duration-200 flex items-center gap-2"
            >
              GitHub →
            </a>
            <a
              href="https://stackoverflow.com/users/1717258/alois-wirkes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-accent-400 transition duration-200 flex items-center gap-2"
            >
              Stack Overflow →
            </a>
            <a
              href="https://wa.me/527225570964"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-accent-400 transition duration-200 flex items-center gap-2"
            >
              WhatsApp →
            </a>
            <a
              href="mailto:hola@aloiswirkes.com"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-accent-400 transition duration-200 flex items-center gap-2"
            >
              Email →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
