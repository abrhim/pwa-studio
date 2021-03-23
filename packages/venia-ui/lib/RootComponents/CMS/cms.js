import React, { Fragment } from 'react';
import { number, shape, string } from 'prop-types';
import { fullPageLoadingIndicator } from '../../components/LoadingIndicator';
import { useCmsPage } from '@magento/peregrine/lib/talons/Cms/useCmsPage';
import RichContent from '../../components/RichContent';
import CategoryList from '../../components/CategoryList';
import { Meta, StoreTitle } from '../../components/Head';
import { mergeClasses } from '../../classify';
import { useIntl } from 'react-intl';

import defaultClasses from './cms.css';

import {
    PageTypes,
    VeniaProductRecommendations
} from '@magento/venia-product-recommendations';

const CMSPage = props => {
    const { id } = props;

    const talonProps = useCmsPage({ id });
    const {
        cmsPage,
        hasContent,
        rootCategoryId,
        shouldShowLoadingIndicator
    } = talonProps;
    const { formatMessage } = useIntl();

    if (shouldShowLoadingIndicator) {
        return fullPageLoadingIndicator;
    }

    const classes = mergeClasses(defaultClasses, props.classes);

    if (hasContent) {
        const {
            content_heading,
            title,
            meta_title,
            meta_description,
            content
        } = cmsPage;

        const headingElement =
            content_heading !== '' ? (
                <h1 className={classes.heading}>{content_heading}</h1>
            ) : null;

        const pageTitle = meta_title || title;

        return (
            <Fragment>
                <StoreTitle>{pageTitle}</StoreTitle>
                <Meta name="title" content={pageTitle} />
                <Meta name="description" content={meta_description} />
                {headingElement}
                <RichContent html={content} />
                <VeniaProductRecommendations pageType={PageTypes.CMS} />
            </Fragment>
        );
    }

    // Fallback to a category list if there is no cms content.
    return (
        <Fragment>
            <CategoryList
                title={formatMessage({
                    id: 'cms.shopByCategory',
                    defaultMessage: 'Shop by category'
                })}
                id={rootCategoryId}
            />
            <VeniaProductRecommendations pageType={PageTypes.CMS} />
        </Fragment>
    );
};

CMSPage.propTypes = {
    id: number,
    classes: shape({
        heading: string
    })
};

export default CMSPage;
