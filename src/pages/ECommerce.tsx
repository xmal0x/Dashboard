import React from 'react';
import {eCommerceData} from "../constants";
import {PageWrapper} from "../hoc";
import Summary from "../components/widgets/Summary";

const ECommerce = () => {

    const {summaryData} = eCommerceData

    return (
        <div className="grid grid-cols-5 gap-4">
            <div className="page__content col-span-5">Visitors Analytics</div>

            <div className="page__content col-span-5">
                <Summary data={summaryData}/>
            </div>

            <div className="page__content col-span-3 row-span-2">Top Countries</div>
            <div className="page__content col-span-2">Top Content</div>
            <div className="page__content col-span-2">Top Channels</div>
            <div className="page__content col-span-2">Visitors Analytics</div>
            <div className="page__content col-span-3">Top Channels</div>
        </div>
    );
};

export default PageWrapper(ECommerce, 'eCommerce')
