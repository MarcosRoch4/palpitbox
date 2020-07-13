import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/pageTitle'

const fetcher = (... args) => fetch(...args).then(res => res.json())

const index = () => {
    const { data, error } = useSWR('/api/get-promo',fetcher)
//return(<pre>{JSON.stringify(data)}</pre>)
    return (
        <div>
            <PageTitle title='Seja Bem Vindo!' />
            <p className='my-12 text-center '  >
                O restaurante 'X' sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre aberto a ouvir a sua opinião.
            </p>           
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 text-black font-bold px-6 py-4 mx-auto rounded-lg shadow-lg hover:text-white shadow' >Dar a sua opinião</a>
                </Link>                               
            </div>
            { !data && 
                <p>Carregando...</p> }
            { !error && data && data.showCoupon &&
                <p className='my-12 text-center '  >
                    {data.message}
            </p>  }
        </div>
        
    )
}

export default index