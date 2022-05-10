export const input = `
import { describe, expect, it } from "vitest";
import { one } from '../src'
describe('should', () => {
  it('exported', () => {
    expect(one).toEqual(1)
  })
})
`

export const output = `
import { describe, expect, it } from "vitest";
import { one,two } from '../src'
describe('should', () => {
  it('one', () => {
    expect(one).toEqual(1)
    expect(two).toEqual(2)
  })
})
`