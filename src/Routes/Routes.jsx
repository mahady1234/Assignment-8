import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';

import SecondCardSection from '../Components/SecondCardSection';
import BannerOne from '../Components/BannerOne';
import CardDetailsSection from '../Components/CardDetailsSection';
import InstallList from '../Components/InstallList';
import ErrorPage from '../Components/ErrorPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                Component: BannerOne
            },
            {
                path: '/secondCardSection',
                Component: SecondCardSection
            },
            {
                path: '/cardDetailSection/:id',
                element: <CardDetailsSection></CardDetailsSection>
            },
            {
                path: '/installList',
                element: <InstallList></InstallList>
            }
        ]
    }
])

export default router;