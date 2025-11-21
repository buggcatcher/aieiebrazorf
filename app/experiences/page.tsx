import Link from "next/link";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header con navigazione */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 mb-8"
          >
            ← Torna alla Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              E-Commerce Esperienze Turistiche
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Connetti provider di esperienze con i turisti ospiti
            </p>
          </div>
        </div>

        {/* Sezioni principali */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Marketplace Esperienze */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                🎭
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Marketplace Esperienze
              </h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Caroselli di esperienze per categoria</li>
              <li>• Filtri per località e tipologia</li>
              <li>• Reviews e rating sistema</li>
              <li>• Disponibilità in tempo reale</li>
            </ul>
          </div>

          {/* Pagamenti Paddle */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                💳
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Pagamenti Sicuri
              </h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Paddle checkout integrato</li>
              <li>• Gestione tasse automatica</li>
              <li>• Protezione anti-frode</li>
              <li>• Supporto Apple Pay e PayPal</li>
            </ul>
          </div>

          {/* Gestione Provider */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                👥
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Provider Network
              </h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Dashboard per provider di esperienze</li>
              <li>• Gestione calendario e disponibilità</li>
              <li>• Analytics e reporting</li>
              <li>• Sistema di commissioni</li>
            </ul>
          </div>

          {/* Esperienza Turisti */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-4">
                🧳
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Esperienza Turisti
              </h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Scoperta esperienze locali</li>
              <li>• Prenotazione semplificata</li>
              <li>• Biglietti digitali e QR code</li>
              <li>• Supporto clienti integrato</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
