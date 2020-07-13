import React, { useState } from 'react'
import Head from 'next/head'

const pageTitle = ({ title }) => {
    return (
        <Head>
            <title>{title} - PalpitBox</title>
        </Head>
    )
}

export default pageTitle