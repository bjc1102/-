import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../styles/theme'
import { GlobalStyle } from '../styles/global-style'
import { socialImageTitle } from '../site.config'
import Layout from '../components/Layout'
import { RecoilRoot } from 'recoil'

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{socialImageTitle}</title>
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  )
}
