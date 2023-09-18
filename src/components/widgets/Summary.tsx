import {ArrowSmallDownIcon, ArrowSmallUpIcon} from "@heroicons/react/24/outline";
import {Direction, SummaryProps} from "../../types";

const Summary = ({data}: SummaryProps) => {
    const isUpDirection = (direction: Direction) => direction === 'up'

    return (
        <div className="flex-between-center xl:flex-nowrap flex-wrap gap-4">
            {data.map(({id, value, diff, direction, title}, index) => (
                <div className={`flex-1 md:p-4 p-2 ${index !== data.length - 1 && 'lg:border-r lg:border-stroke-gray'}`}
                     key={id}>
                    <div className="flex-center">
                        <p className="md:text-2xl font-semibold mr-2">{value}</p>
                        <div className="flex-center">
                            <div className="object-contain h-4 w-4">
                                {
                                    isUpDirection(direction)
                                        ? (<ArrowSmallUpIcon className="text-positive-green"/>)
                                        : (<ArrowSmallDownIcon className="text-negative-orange"/>)
                                }
                            </div>
                            <span
                                className={`text-xs ${isUpDirection(direction) ? 'text-positive-green' : 'text-negative-orange'}`}>{diff}</span>
                        </div>
                    </div>
                    <p className="text-dark-gray md:text-sm text-xs">{title}</p>
                </div>
            ))}
        </div>
    );
};

export default Summary;
