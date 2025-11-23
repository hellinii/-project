import React from 'react';
import type { TLIResult } from '../types';
import { getTLIColorClass, formatTime12Hour } from '../utils/tliUtils';

interface TimelineSectionProps {
    timelineData: TLIResult[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ timelineData }) => {
    if (timelineData.length === 0) return null;

    return (
        <section className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-6">Time-Based Analysis (Nearest Slots)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {timelineData.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-background-dark p-4 rounded-lg">
                        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                            {formatTime12Hour(item.time)}
                        </p>
                        <p className="text-3xl font-bold my-2">{item.avg_duration.toFixed(0)} min</p>
                        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                            <div
                                className={`h-2 rounded-full ${getTLIColorClass(item.tli).replace('text-', 'bg-')}`}
                                style={{ width: `${Math.min((item.avg_duration / 60) * 100, 100)}%` }}
                            ></div>
                        </div>
                        <p className="text-xs text-right mt-1 text-gray-500">TLI: {item.tli.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TimelineSection;
