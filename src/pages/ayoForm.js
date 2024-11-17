import React from 'react';
import Ayo from '../component/AyoForm'; // Import the form component

function App() {
    return (
        <div>
            {/* Main Page Layout */}
            <header className="bg-blue-600 text-white py-4 text-center shadow-lg">
                <h1 className="text-3xl font-bold">Welcome to the Form Page</h1>
                <p className="text-sm">Fill out the form below and submit your information</p>
            </header>

            <main className="p-6">
                {/* Render the Ayo component */}
                <Ayo />
            </main>

            <footer className="bg-gray-800 text-white text-center py-4 mt-6">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Ayo;
