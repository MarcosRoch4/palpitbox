import React from 'react'

import '../css/styles.css'


import Layout from '../components/Layout'




const myApp = ({ Component, pageProps }) => {
    return(
       <Layout>
            <Component {...pageProps} />
       </Layout>

    )
    
}

export default myApp