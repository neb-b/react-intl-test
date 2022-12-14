import React from "react"

import { IntlProvider } from "react-intl"
import { useRouter } from "next/router"

import English from "../translations/compiled-locales/en.json"
import Spanish from "../translations/compiled-locales/es.json"

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()
  const [shortLocale] = locale ? locale.split("-") : ["en"]

  const messages = React.useMemo(() => {
    switch (shortLocale) {
      case "es":
        return Spanish
      default:
        return English
    }
  }, [shortLocale])

  return (
    <IntlProvider locale={shortLocale} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
