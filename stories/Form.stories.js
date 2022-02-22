import React from "react"
import { Form } from "./Form"
import userEvent from '@testing-library/user-event'
import { of } from "rxjs"


export default {
  title: "Form",
  decorators: [withKnobs]
}

export const UserFillingOutForm = () => (
  <Animate component={Form} propStream={of({})} loop={true} />
)
