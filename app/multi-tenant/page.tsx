import Link from "next/link";

export default function MultiTenantPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header con navigazione */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
          >
            ← Torna alla Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Multi-Tenancy con Turso
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Domini personalizzati e theming dinamico per ogni locatore
            </p>
          </div>
        </div>

        {/* Sezioni principali */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Gestione Domini */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                🌐
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Domini Personalizzati
              </h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Sottodomini automatici per ogni locatore</li>
              <li>• Domini custom con SSL automatico</li>
              <li>• Routing dinamico basato su hostname</li>
              <li>• Gestione DNS automatizzata</li>
            </ul>
          </div>

          {/* Theming Dinamico */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                🎨
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Brand Identity
              </h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Colori personalizzati per ogni tenant</li>
              <li>• Logo e immagini di copertina</li>
              <li>• Font e tipografia custom</li>
              <li>• Layout e componenti modulari</li>
            </ul>
          </div>

          {/* Database Architecture */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                🗄️
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Database per User
              </h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Turso SQLite isolamento completo</li>
              <li>• Scaling automatico per tenant</li>
              <li>• Backup e recovery per utente</li>
              <li>• API Turso Platform per gestione</li>
            </ul>
          </div>

          {/* Autenticazione */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-4">
                🔐
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Autenticazione
              </h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Clerk Auth per gestione utenti</li>
              <li>• Ruoli e permessi per tenant</li>
              <li>• SSO e integrazione OAuth</li>
              <li>• Webhooks per automazione</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
