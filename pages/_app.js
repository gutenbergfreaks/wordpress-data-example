import App, { Container } from 'next/app'
import TagManager from 'react-gtm-module'
import '../styles/globals.css'
import '../store'

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize({ gtmId: 'GTM-NF2RJV9' })
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
