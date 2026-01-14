import { describe, it, expect } from 'vitest'
import { MAX_BYTE_COLOR_VALUE } from '../constants'

describe('constants', () => {
  it('should match snapshot', () => {
    expect(MAX_BYTE_COLOR_VALUE).toBe(256)
  })
})
