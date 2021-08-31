import '../styles/globals.scss';
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }:AppProps) =>{

  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
