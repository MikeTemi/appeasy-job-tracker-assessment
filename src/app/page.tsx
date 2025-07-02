import Link from "next/link";
import { APP_CONFIG, NAVIGATION_ITEMS, FEATURE_CARDS } from "@/data/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <header className="bg-charcoal text-light-gray shadow-lg">
        <div className="container-appeasy py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-mint-green">AppEasy</h1>
              <span className="text-lg">Job Tracker</span>
            </div>
            <div className="space-x-6">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-mint-green transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-appeasy py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-4">
            Welcome to <span className="text-mint-green">AppEasy</span> Job
            Tracker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {APP_CONFIG.description}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {FEATURE_CARDS.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-mint-green rounded-lg flex items-center justify-center mb-4">
                <span className="text-charcoal font-bold text-xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-mint-green text-charcoal px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors">
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-light-gray mt-16">
        <div className="container-appeasy py-8">
          <div className="text-center">
            <p className="text-gray-400">
              &copy; 2024 AppEasy Job Tracker. Built for the Software
              Engineering Intern Assessment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
