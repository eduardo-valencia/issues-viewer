export function getDateDiffByUnit(date1, date2, getUnit) {
  const unit1 = getUnit(date1)
  const unit2 = getUnit(date2)
  if (unit2 > unit1) {
    return unit2 - unit1
  } else if (unit2 < unit1) {
    return unit1 - unit2
  }
  return false
}

function getTimeUnitsToMethods() {
  return [
    { name: 'years', method: date => date.getFullYear() },
    { name: 'months', method: date => date.getMonth() },
    { name: 'days', method: date => date.getDate() },
    { name: 'hours', method: date => date.getHours() },
    { name: 'minutes', method: date => date.getMinutes() }
  ]
}

function getDateDiffOfUnitWithIndex(index, date1, date2) {
  const timeUnitsToMethods = getTimeUnitsToMethods()
  const { method, name } = timeUnitsToMethods[index]
  const diff = getDateDiffByUnit(date1, date2, method)
  return { name: name, diff: diff }
}

function findFirstDiffInTimeUnit(date1, date2) {
  const timeUnitsToMethods = getTimeUnitsToMethods()
  for (let index = 0; index < timeUnitsToMethods.length; index++) {
    const { name, method } = timeUnitsToMethods[index]
    const diff = getDateDiffByUnit(date1, date2, method)
    if (diff) return { unit: name, diff: diff, index: index }
  }
  throw Error(
    `There is no difference; dates are equal in years, months, days, and hours.`
  )
}

export function getRelativeDateDiff(date1, date2) {
  let timeDiffWithNextUnit = findFirstDiffInTimeUnit(date1, date2)
  const { index } = timeDiffWithNextUnit
  timeDiffWithNextUnit['nextUnit'] = getDateDiffOfUnitWithIndex(
    index,
    date1,
    date2
  )
  return timeDiffWithNextUnit
}

function getDaysInUnit(unit) {
  const daysInUnits = {
    months: 30,
    years: 365
  }
  return daysInUnits[unit]
}

function shouldRoundUp(unit, days) {
  let daysInUnit = getDaysInUnit('months')
  if (unit !== 'days') {
    daysInUnit = getDaysInUnit(unit)
  }
  return days >= 0.8 * daysInUnit
}

function shouldRoundUnit(unit) {
  return unit === 'months' || unit === 'years'
}

function convertToDays(unit, amount) {
  if (unit === 'months' || unit === 'years') {
    const daysInUnit = getDaysInUnit(unit)
    return amount * daysInUnit
  }
  return amount
}

export function roundUnitOfTime(unit, unitVal, nextUnit, nextUnitVal) {
  let roundedUnitAmount = unitVal
  if (!shouldRoundUnit(unit)) return roundedUnitAmount

  let days = convertToDays(nextUnit, nextUnitVal)
  const roundUpValue = shouldRoundUp(nextUnit, days)
  if (roundUpValue) roundedUnitAmount += 1
  return roundedUnitAmount
}

function abbreviateUnit(unit) {
  const abbreviations = {
    minutes: 'm',
    hours: 'H',
    days: 'D',
    months: 'M',
    years: 'Y'
  }
  return abbreviations[unit]
}

function getTimeFromToday(time) {
  const today = new Date()
  return getRelativeDateDiff(today, time)
}

function abbreviateTime(unit, time) {
  const abbrevUnit = abbreviateUnit(unit)
  return String(time) + abbrevUnit
}

function roundWithTimeDiff(timeDiffObject) {
  // Minutes will not have a nextUnit
  const { unit, diff, nextUnit } = timeDiffObject
  const { unit: nextUnitName, diff: nextUnitVal } = nextUnit
  const roundedDiff = roundUnitOfTime(unit, diff, nextUnitName, nextUnitVal)
  return { unit: unit, roundedDiff: roundedDiff }
}

export function getAbbreviatedTimeFromToday(time) {
  const timeFromToday = getTimeFromToday(time)
  const roundedTimeFromToday = roundWithTimeDiff(timeFromToday)
  const { unit, roundedDiff } = roundedTimeFromToday
  return abbreviateTime(unit, roundedDiff)
}
