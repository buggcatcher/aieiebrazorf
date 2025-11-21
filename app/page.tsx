import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 font-sans dark:from-gray-900 dark:to-gray-800">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-16 px-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl dark:bg-gray-900/80">
        
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Piattaforma Multi-Tenant
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
              per Locatori & Attività
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-400">
            <p className="leading-relaxed">
              <strong className="text-gray-800 dark:text-gray-200">Domini personalizzati per ogni locatore</strong> con theming dinamico (colori, logo, font) per esprimere la propria brand identity attraverso Turso database per-user.
            </p>
            <p className="leading-relaxed">
              <strong className="text-gray-800 dark:text-gray-200">E-commerce integrato per esperienze turistiche</strong> che mette in contatto provider di esperienze con i turisti ospiti, gestito tramite Paddle payments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              href="/multi-tenant" 
              className="bg-blue-100 dark:bg-blue-900/30 px-6 py-4 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors cursor-pointer transform hover:scale-105 duration-200"
            >
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Multi-Tenancy</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">Turso + Domini personalizzati</p>
            </Link>
            <Link 
              href="/experiences" 
              className="bg-purple-100 dark:bg-purple-900/30 px-6 py-4 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors cursor-pointer transform hover:scale-105 duration-200"
            >
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">E-Commerce</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400">Paddle + Esperienze turistiche</p>
            </Link>
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Next.js + TypeScript + Tailwind CSS + Turso + Paddle
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
