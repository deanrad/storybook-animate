import { concat } from "rxjs"
import { map } from "rxjs/operators"

export function sequenceOf(...observables) {
  const result = concat(...observables)
  result.combineWith = (staticProps = {}) => {
    return result.pipe(
      map(dynProps => Object.assign({}, staticProps, dynProps))
    )
  }
  return result
}
