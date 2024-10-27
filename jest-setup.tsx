import '@testing-library/jest-dom'
import { configure } from 'mobx'
import fetchMock from 'jest-mock-fetch'

configure({ enforceActions: 'never' })
global.fetch = fetchMock as any
