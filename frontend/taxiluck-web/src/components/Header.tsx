import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Route Analysis Dashboard</h1>
            <div className="flex items-center space-x-6">
                {/* Header actions if needed */}
            </div>
        </header>
    );
};

export default Header;
