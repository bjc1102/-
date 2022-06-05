export function getToday() {
  let Day = new Date()

  const year = Day.getFullYear()
  const month = Day.getMonth()
  const date = Day.getDate()
  const day = Day.getDay()

  return {
    year,
    month,
    date,
    day,
  }
}

export function getDayOfTheWeek(date: number): string {
  const Week = ['일', '월', '화', '수', '목', '금', '토']
  return Week[date]
}
