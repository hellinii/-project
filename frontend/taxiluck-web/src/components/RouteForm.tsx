import React from 'react';

const BOROUGHS = ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"];

interface RouteFormProps {
    puBorough: string;
    setPuBorough: (value: string) => void;
    doBorough: string;
    setDoBorough: (value: string) => void;
    timeInput: string;
    setTimeInput: (value: string) => void;
    onAnalyze: () => void;
    isLoading: boolean;
    error: string | null;
}

const RouteForm: React.FC<RouteFormProps> = ({
    puBorough,
    setPuBorough,
    doBorough,
    setDoBorough,
    timeInput,
    setTimeInput,
    onAnalyze,
    isLoading,
    error
}) => {
    return (
        <section className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-1">Analyze Route</h2>
            <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6 text-sm">
                Analyze taxi route efficiency and congestion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
                {/* Origin Input */}
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-2" htmlFor="origin">
                        Origin
                    </label>
                    <div className="relative">
                        <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-green-500">location_on</span>
                        <select
                            id="origin"
                            value={puBorough}
                            onChange={(e) => setPuBorough(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 rounded border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
                        >
                            {BOROUGHS.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                    </div>
                </div>

                {/* Destination Input */}
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-2" htmlFor="destination">
                        Destination
                    </label>
                    <div className="relative">
                        <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-red-500">location_on</span>
                        <select
                            id="destination"
                            value={doBorough}
                            onChange={(e) => setDoBorough(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 rounded border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
                        >
                            {BOROUGHS.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                    </div>
                </div>

                {/* Time Input */}
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-2" htmlFor="time">
                        Time (24h)
                    </label>
                    <div className="relative">
                        <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-text-light-secondary dark:text-text-dark-secondary">schedule</span>
                        <input
                            id="time"
                            type="text"
                            value={timeInput}
                            onChange={(e) => setTimeInput(e.target.value)}
                            placeholder="15:30"
                            pattern="[0-2][0-9]:[0-5][0-9]"
                            className="w-full pl-10 pr-3 py-2 rounded border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>
                </div>

                {/* Analyze Button */}
                <div className="lg:col-span-1">
                    <button
                        onClick={onAnalyze}
                        disabled={isLoading}
                        className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        {isLoading ? (
                            <span className="material-icons animate-spin">refresh</span>
                        ) : (
                            <span className="material-icons text-xl">bar_chart</span>
                        )}
                        <span>{isLoading ? 'Analyzing...' : 'Analyze Route'}</span>
                    </button>
                </div>
            </div>

            {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                    {error}
                </div>
            )}
        </section>
    );
};

export default RouteForm;
