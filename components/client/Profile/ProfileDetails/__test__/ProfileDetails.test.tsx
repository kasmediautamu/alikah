// helloword.test.tsx
import { render } from '@testing-library/react'
import ProfileDetails from '..'

test('header renders with correct text', () => {
  const { getByTestId } = render(<ProfileDetails />)
  const headerEl = getByTestId("settings")
  expect(headerEl.textContent).toBe("Settings")
})

test('name paragraph renders with correct text', () => {
  const { getByTestId } = render(<ProfileDetails />)
  const nameEl = getByTestId("name")
  expect(nameEl.textContent).toBe("Ivan Kabuye")
})

test('phone paragraph renders with correct text', () => {
  const { getByTestId } = render(<ProfileDetails />)
  const phoneEl = getByTestId("phone")
  expect(phoneEl.textContent).toBe("0700756217")
})

test('div renders with correct text', () => {
  const { getByTestId } = render(<ProfileDetails />)
  const myAdvertEl = getByTestId("myadverts")
  expect(myAdvertEl.textContent).toBe("My adverts")
})

test('div renders with correct text', () => {
  const { getByTestId } = render(<ProfileDetails />)
  const feedbackEl = getByTestId("feedback")
  expect(feedbackEl.textContent).toBe("Feedback")
})

test('div renders with correct text', () => {
  const { getByTestId } = render(<ProfileDetails />)
  const performanceEl = getByTestId("performance")
  expect(performanceEl.textContent).toBe("Performance")
})

test('div renders with correct text', () => {
  const { getByTestId } = render(<ProfileDetails />)
  const premiumEl = getByTestId("premium")
  expect(premiumEl.textContent).toBe("Premium Services")
})

test('div renders with correct text', () => {
  const { getByTestId } = render(<ProfileDetails />)
  const followersEl = getByTestId("followers")
  expect(followersEl.textContent).toBe("Followers 1")
})

test('div renders with correct text', () => {
  const { getByTestId } = render(<ProfileDetails />)
  const faqEl = getByTestId("faq")
  expect(faqEl.textContent).toBe("Frequently Asked Questions")
})

