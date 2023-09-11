import React, {FC} from 'react';

const PageWrapper = (Component: FC, title: string) =>
    function () {
        return (
            <main className="page">
                <h2 className="page__title">{title}</h2>
                <Component/>
            </main>
        )
    }

export default PageWrapper;
