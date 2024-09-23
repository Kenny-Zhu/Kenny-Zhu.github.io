// page.js
"use client"

import { useState } from 'react';

export default function Page() {
    const [count, setCount] = useState(0);

    // Simulates `compile-ifzero` logic: If count is 0, display a message. Otherwise, display another message.
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">
                    IfZero Expression with Tailwind and React
                </h1>

                {/* Display message based on count */}
                <div className="mb-6 text-lg">
                    {count === 0 ? (
                        <p className="text-green-500">Count is Zero! 🟢</p>
                    ) : (
                        <p className="text-red-500">Count is NOT Zero! 🔴</p>
                    )}
                </div>

                {/* Buttons to update count */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Add 1
                    </button>
                    <button
                        onClick={() => setCount(count - 1)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Subtract 1
                    </button>
                    <button
                        onClick={() => setCount(0)}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Reset to 0
                    </button>
                </div>
            </div>
        </div>
    );
}