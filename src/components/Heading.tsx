import { FormattedMessage } from "react-intl"
import messages from "./messages"

const Index = () => {
  return (
    <h2>
      <FormattedMessage {...messages.heading} />
    </h2>
  )
}

export default Index
