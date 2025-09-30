import { describe, it, expect } from 'vitest'
import { getUsers } from '../services/userService'

describe('userService', () => {
  it('exports getUsers function', () => {
    expect(typeof getUsers).toBe('function')
  })
})
