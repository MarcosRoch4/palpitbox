import React from 'react'

const Footer = () => {
    return(
        <div className='bg-gray-700'>
            <div className='container mx-auto p-4 text-center font-bold text-white'>
                Projeto Desenvolvido por : {' '}
                <a className='hover:underline' href= 'http://sibylconsultoria.com.br'>Marcos Rocha</a>{' '} | {' '}
                <a className='hover:underline' href='https://www.linkedin.com/in/marcos-rocha-8b3ba158/'>LINKEDIN</a>
                <div className='mt-2' >
                <img className='inline p-4' src='/logo_semana_fsm.png' />
                <img className='inline p-4' src='/logo_devpleno.png' />
                </div>
            </div>
        </div>
    )
}

export default Footer