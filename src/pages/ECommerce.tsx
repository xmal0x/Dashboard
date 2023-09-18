import React from 'react';
import {eCommerceData} from "../constants";
import {PageWrapper} from "../hoc";
import Summary from "../components/widgets/Summary";
import Chart from "../components/widgets/Chart";
import {useThemeContext} from "../contexts/ThemeContextProvider";

const ECommerce = () => {
    const {
        summary,
        visitorsAnalytics,
        topCountries,
        dayTimeAnalytics,
        deviceAnalytics,
        summaryVisitorsCount,
        actualExpected
    } = eCommerceData

    const {themeColor} = useThemeContext()

    return (
        <div className="md:grid flex flex-col grid-cols-5 gap-4">
            <div className="page__content p-4 col-span-5">
                <Chart
                    title="Visitors Analytics"
                    type="bar"
                    height={500}
                    options={visitorsAnalytics}
                    series={visitorsAnalytics.series}
                    colors={[themeColor]}
                />
            </div>

            <div className="page__content p-4 col-span-5">
                <Summary data={summary}/>
            </div>

            <div className="page__content p-4 col-span-3 row-span-2">
                <Chart title="Top Countries"
                       type="bar"
                       height={500}
                       options={topCountries}
                       series={topCountries.series}
                       colors={[themeColor]}/>
            </div>
            <div className="page__content p-4 col-span-2">
                <Chart
                    title="Device Analytics"
                    type="donut"
                    height={250}
                    options={deviceAnalytics}
                    series={deviceAnalytics.series}
                    colors={[themeColor]}
                />
            </div>
            <div className="page__content p-4 col-span-2">
                <Chart
                    title="Actual/Expected"
                    type="bar"
                    height={250}
                    options={actualExpected}
                    series={actualExpected.series}
                    colors={[themeColor]}/>
            </div>
            <div className="page__content p-4 col-span-2">
                <Chart
                    title="Times of Day"
                    type={"line"}
                    height={350}
                    options={dayTimeAnalytics}
                    series={dayTimeAnalytics.series}
                    colors={[themeColor, '#212B36']}
                />
            </div>
            <div className="page__content p-4 col-span-3">
                <Chart
                    title="Visitors Count"
                    type="area"
                    height={350}
                    options={summaryVisitorsCount}
                    series={summaryVisitorsCount.series}
                    colors={[themeColor]}
                />
            </div>
        </div>
    )
};

export default PageWrapper(ECommerce, 'eCommerce')
