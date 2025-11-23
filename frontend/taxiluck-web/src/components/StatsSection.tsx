import React from 'react';

interface StatsSectionProps {
    avgDistance?: number;
    avgCost?: number;
}

const StatsSection: React.FC<StatsSectionProps> = ({ avgDistance, avgCost }) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                    <span className="material-icons text-primary text-3xl">route</span>
                </div>
                <div>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary">Average Distance</p>
                    <p className="text-3xl font-bold">
                        {avgDistance !== undefined ? avgDistance.toFixed(1) : '-'} <span className="text-xl font-semibold">mile</span>
                    </p>
                </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <span className="material-icons text-green-500 text-3xl">payments</span>
                </div>
                <div>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary">Average Cost</p>
                    <p className="text-3xl font-bold">$ {avgCost !== undefined ? avgCost.toFixed(2) : '-'}</p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
