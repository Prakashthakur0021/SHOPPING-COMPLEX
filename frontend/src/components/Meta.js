import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({ title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to Proshop',
    description: 'We sell the best products for cheap and best qualtiy',
    keywords: 'electronics, buy electronics, cheap electronics, latest electronics'
}

export default Meta
