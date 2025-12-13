import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
              Find the right people.
              <span className="text-blue-600"> Instantly.</span>
            </h1>

            <p className="text-slate-600 text-lg mb-8">
              LINKORA is an AI-powered professional graph that helps you discover
              people, opportunities, and warm introductions across every industry.
            </p>

            <div className="flex gap-4">
              <Link
                href="/signup"
                className="px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                Get started free
              </Link>

              <Link
                href="/search"
                className="px-6 py-3 rounded-full border border-slate-300 text-sm text-slate-700 hover:bg-slate-100 transition"
              >
                Try search
              </Link>
            </div>
          </div>

          {/* RIGHT PREVIEW */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <div className="text-xs font-medium text-slate-500 mb-4">
              Example search
            </div>

            <div className="border rounded-full px-4 py-2 text-sm text-slate-500 mb-4">
              Data scientist in Dubai with fintech experience
            </div>

            <div className="space-y-3">
              <div className="border rounded-xl p-4 flex justify-between items-center">
                <div>
                  <div className="font-medium text-sm">Aarav Patel</div>
                  <div className="text-xs text-slate-500">
                    Senior Data Scientist · Fintech Labs
                  </div>
                </div>
                <span className="text-xs bg-slate-900 text-white px-3 py-1 rounded-full">
                  View
                </span>
              </div>

              <div className="border rounded-xl p-4 flex justify-between items-center">
                <div>
                  <div className="font-medium text-sm">Sara Khan</div>
                  <div className="text-xs text-slate-500">
                    ML Engineer · BankAI
                  </div>
                </div>
                <span className="text-xs bg-slate-900 text-white px-3 py-1 rounded-full">
                  View
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
