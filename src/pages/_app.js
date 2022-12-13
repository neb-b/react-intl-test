import { useEffect } from "react"

import { IntlProvider } from "react-intl"
import { useRouter } from "next/router"

export default function Page({ Component, pageProps }) {
  return (
    <IntlProvider locale="en">
      <div>
        <Component {...pageProps} />
      </div>
    </IntlProvider>
  )
}
