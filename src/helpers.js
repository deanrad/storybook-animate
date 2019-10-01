import { concat, Observable } from "rxjs"
import { map } from "rxjs/operators"

export function sequenceOf(...observables) {
  const result = concat(...observables)
  result.combineWith = (staticProps = {}) => {
    return result.pipe(map(dynProps => ({ ...staticProps, ...dynProps })))
  }
  return result
}
