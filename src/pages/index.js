import Link from "next/link"
import Head from "next/head"
import { FormattedMessage } from "react-intl"

const number = 5
const Index = () => (
  <div>
    <Head>
      <title>Hello World.</title>
    </Head>
    <Link href="/two">Go to page 2</Link>
    <br />
    OK
    <br />
    <FormattedMessage
      defaultMessage="This is a string to be translated"
      description="this is a test description"
    />
  </div>
)

export default Index
