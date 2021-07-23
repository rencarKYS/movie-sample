export const dateParser = (value) => {
  if (!value) return '-';
  const year = [...value].filter((a, i) => i < 4).join('')
  const month = [...value].filter((a, i) => i > 3 && i < 6).join('')
  const day = [...value].filter((a, i) => i > 5 && i < 8).join('')
  return `${year}년 ${month}월 ${day}일`
}