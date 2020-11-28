import App, { Container } from 'next/app'
import TagManager from 'react-gtm-module'
import '../styles/globals.css'
import '../store'

const tagManagerArgs = {
  gtmid: 'GTM-NF2RJV9'
}

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs)
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
