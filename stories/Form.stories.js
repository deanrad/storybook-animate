import React from "react"
import { Form } from "./Form"
import { Animate } from "../src/Animate"
import userEvent from '@testing-library/user-event'
import { concat } from "rxjs"

import { after } from 'omnibus-rxjs'
import { mapTo } from "rxjs/operators"

export default {
  title: "Form"
}

const email = () => document.getElementById('email')
const password = () => document.getElementById('password')

// This is an Observable just for typing side-effects.
// Yield the same (empty) props every time via `mapTo`
const userFillsOutForm = concat(
  after(1000),
  after(Promise.resolve(), () => {
    userEvent.type(email(), 'me@example.com', { delay: 100 })
  }),
  after(2000),
  after(Promise.resolve(), () => {
    userEvent.type(password(), 'password123', { delay: 100 })
  }),
).pipe(
  mapTo({})
)

export const UserFillingOutForm = () => (
  <Animate component={Form} propStream={userFillsOutForm} loop={false} />
)
