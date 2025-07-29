import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // Optional: Remove if you’re only using Tailwind

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <div className="flex space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-20 w-20 hover:scale-110 transition" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-20 w-20 hover:scale-110 transition" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      <div className="card p-8 rounded-xl bg-white shadow-md flex flex-col items-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-100 px-1 py-0.5 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
