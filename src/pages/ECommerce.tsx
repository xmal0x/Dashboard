import React from 'react';
import {eCommerceData} from "../constants";
import {ArrowSmallDownIcon, ArrowSmallUpIcon} from "@heroicons/react/24/outline";

const ECommerce = () => {

    const {summaryData} = eCommerceData

    return (
        <div className="page">
            <h2 className="page__title">eCommerce</h2>
            <div className="grid grid-cols-5 gap-4">
                <div className="page__content col-span-5">Visitors Analytics</div>

                <div className="page__content col-span-5">
                    <div className="flex justify-between md:flex-nowrap flex-wrap gap-4">
                        {summaryData.map((item, index) => (
                            <div className={`flex-1 md:p-4 p-2 ${index !== summaryData.length-1 && 'md:border-r md:border-stroke-gray'}`} key={item.id}>
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
                </div>

                <div className="page__content col-span-3 row-span-2">Top Countries</div>
                <div className="page__content col-span-2">Top Content</div>
                <div className="page__content col-span-2">Top Channels</div>
                <div className="page__content col-span-2">Visitors Analytics</div>
                <div className="page__content col-span-3">Top Channels</div>
            </div>
        </div>
    );
};

export default ECommerce;
