import { Fragment } from "react"
import MainHeader from "./Main-header"

function Laytout(props) {
  return (
    <Fragment>
            <MainHeader />

        <main>
            {props.children}
        </main>

    </Fragment>
  )
}

export default Laytout