'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Playground() {
  const [selectedTheme, setSelectedTheme] = useState('blue');
  const [tenantName, setTenantName] = useState('Hotel Bella Vista');
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');

  const themes = {
    blue: { primary: '#3B82F6', secondary: '#1E40AF', bg: 'from-blue-50 to-blue-100' },
    green: { primary: '#10B981', secondary: '#047857', bg: 'from-green-50 to-green-100' },
    purple: { primary: '#8B5CF6', secondary: '#7C3AED', bg: 'from-purple-50 to-purple-100' },
    red: { primary: '#EF4444', secondary: '#DC2626', bg: 'from-red-50 to-red-100' },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6 text-green-600 hover:text-green-700 font-medium">
            ← Torna alla Home
          </Link>
          <h1 className="text-4xl font-bold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Playground Interattivo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Esplora e sperimenta con i concetti della piattaforma multi-tenant
          </p>
        </div>

        {/* Sezioni descrittive */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              🎨 Demo Multi-Tenant Theming
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Cambia tema in tempo reale, personalizza colori e vedi l'effetto immediato sui domini personalizzati
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
              🗄️ Database Schema Explorer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Visualizza lo schema Turso, esplora query e comprendi la separazione dei tenant
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">
              💳 Payment Flow Simulator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Simula il flusso Paddle, calcola commissioni e testa diversi scenari di pagamento
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-3">
              💻 Code Snippets Interattivi
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Editor in-browser con esempi pratici di middleware, database setup e integrazione API
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              🔌 API Playground
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Testa endpoint mockati, esplora documentazione interattiva e prova richieste/risposte
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-3">
              ⚙️ Configurazione Guidata
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Wizard step-by-step per setup nuovo tenant con anteprima e export del codice
            </p>
          </div>
        </div>

        {/* Demo semplice e interattiva */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            🎮 Demo Basilare: Personalizza il tuo Tenant
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Controlli */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome del Tenant
                </label>
                <input
                  type="text"
                  value={tenantName}
                  onChange={(e) => setTenantName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Es: Hotel Bella Vista"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tema Predefinito
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(themes).map(([key, theme]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedTheme(key);
                        setPrimaryColor(theme.primary);
                      }}
                      className={`p-3 rounded-lg border-2 transition-all capitalize ${
                        selectedTheme === key
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-full mx-auto mb-1"
                        style={{ backgroundColor: theme.primary }}
                      ></div>
                      {key}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Colore Personalizzato
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Anteprima */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Anteprima del Tenant
              </h3>
              
              {/* Mockup sito */}
              <div 
                className="border-4 border-gray-300 rounded-lg overflow-hidden bg-gradient-to-br"
                style={{ 
                  borderColor: primaryColor,
                  backgroundImage: `linear-gradient(to bottom right, ${primaryColor}15, ${primaryColor}05)` 
                }}
              >
                {/* Header mockup */}
                <div 
                  className="px-4 py-3 text-white font-semibold"
                  style={{ backgroundColor: primaryColor }}
                >
                  {tenantName}
                </div>
                
                {/* Content mockup */}
                <div className="p-4 bg-white dark:bg-gray-900">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                    Benvenuto nel nostro sito!
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Scopri le nostre esperienze turistiche uniche.
                  </p>
                  
                  <button 
                    className="px-4 py-2 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Prenota Ora
                  </button>
                </div>
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <p><strong>Dominio:</strong> {tenantName.toLowerCase().replace(/\s+/g, '')}.tuapiattaforma.com</p>
                <p><strong>Database:</strong> tenant_{tenantName.toLowerCase().replace(/\s+/g, '_')}</p>
                <p><strong>Colore primario:</strong> {primaryColor}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione codice generato */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            💻 Codice CSS Generato
          </h3>
          <pre className="text-green-400 text-sm overflow-x-auto">
{`:root {
  --tenant-primary: ${primaryColor};
  --tenant-name: "${tenantName}";
  --tenant-slug: "${tenantName.toLowerCase().replace(/\s+/g, '-')}";
}

.tenant-header {
  background-color: var(--tenant-primary);
  color: white;
}

.tenant-button {
  background-color: var(--tenant-primary);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
