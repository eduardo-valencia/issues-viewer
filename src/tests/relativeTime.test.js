import {
  getDateDiffByUnit,
  getRelativeDateDiff,
  roundUnitOfTime,
  getAbbreviatedTimeFromToday
} from '../components/Detail/relativeTime'

function getTwoDates() {
  const today = new Date()
  let inOneHour = new Date()
  const hours = today.getHours()
  inOneHour.setHours(hours + 1)
  return [today, inOneHour]
}

function testDiffByUnitUsingTwoDates(getUnit, expectedVal) {
  const twoDates = getTwoDates()
  const diff = getDateDiffByUnit(twoDates[0], twoDates[1], getUnit)
  expect(diff).toBe(expectedVal)
}

// Date difference by unit
test('Should return the difference when the case is true.', () => {
  const getHour = date => date.getHours()
  testDiffByUnitUsingTwoDates(getHour, 1)
})

test('Should return false when no difference exists in unit.', () => {
  const getMinutes = date => date.getMinutes()
  testDiffByUnitUsingTwoDates(getMinutes, false)
})

// Relative Date Difference
test('Should return unit and difference when not same dates.', () => {
  const twoDates = getTwoDates()
  const diffWithUnit = getRelativeDateDiff(twoDates[0], twoDates[1])
  expect(diffWithUnit.unit).toBe('hours')
  expect(diffWithUnit.diff).toBe(1)
})

// Rounding
test('Should return 2 months if given 1 month and 27 days.', () => {
  const months = roundUnitOfTime('months', 1, 'days', 27)
  expect(months).toBe(2)
})

test('Should round to 2 years if given 1 year and 11 months.', () => {
  const years = roundUnitOfTime('years', 1, 'months', 11)
  expect(years).toBe(2)
})

test('Should round to 1 month if given 1 month and 14 days.', () => {
  const months = roundUnitOfTime('months', 1, 'days', 14)
  expect(months).toBe(1)
})

test('Should return 14 days when given 14 days.', () => {
  const days = roundUnitOfTime('days', 14, 'hours', 23)
  expect(days).toBe(14)
})

// Abbreviate Time From Today
test('Should return 3 months abbreviated if given January 31, 2019.', () => {
  const date = new Date('January 31, 2019')
  const abbreviatedTime = getAbbreviatedTimeFromToday(date)
  expect(abbreviatedTime).toBe('3M')
})

function getDateWithYearsAndMonthsAgo(years, months) {
  let date = new Date()
  date.setFullYear(date.getFullYear() - years)
  date.setMonth(date.getMonth() - months)
  return date
}

test('Should return 1 year if given 1 year and 2 months ago', () => {
  let date = getDateWithYearsAndMonthsAgo(1, 2)
  const abbreviatedTime = getAbbreviatedTimeFromToday(date)
  expect(abbreviatedTime).toBe('1Y')
})
