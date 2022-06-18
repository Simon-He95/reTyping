import { expect, it } from 'vitest'
import { calculatePatch, diff } from '../src'
import { createAnimator } from '../src/animator'
import { input, output } from './fixture'

it('animator', () => {
  const delta = diff(input, output)
  const patches = calculatePatch(delta)
  const animator = createAnimator(input, patches)
  expect([...animator]).toMatchSnapshot('animator')
})
