import React from 'react';
import {ArrowSmallDownIcon, ArrowSmallUpIcon} from "@heroicons/react/24/outline";
import {SummaryData} from "../../types";

interface SummaryProps {
    data: SummaryData[]
}

const Summary = ({data}: SummaryProps) => {
    return (
        <div className="flex justify-between xl:flex-nowrap flex-wrap gap-4">
            {data.map((item, index) => (
                <div className={`flex-1 md:p-4 p-2 ${index !== data.length-1 && 'lg:border-r lg:border-stroke-gray'}`} key={item.id}>
                    <div className="flex items-center">
                        <p className="md:text-2xl font-semibold mr-2">{item.value}</p>
                        <div className="flex items-center">
                            <div className="object-contain h-4 w-4">
                                {
                                    item.direction === 'up'
                                        ? (<ArrowSmallUpIcon className="text-positive-green"/>)
                                        : (<ArrowSmallDownIcon className="text-negative-orange"/>)
                                }
                            </div>
                            <span className={`text-xs ${item.direction === 'up' ? 'text-positive-green' : 'text-negative-orange'}`}>{item.diff}</span>
                        </div>
                    </div>
                    <p className="text-dark-gray md:text-sm text-xs">{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default Summary;
