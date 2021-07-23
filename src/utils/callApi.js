const baseUrl = process.env.MOVIE_BASE_URI

export const callApi = async (param) => {
  const response = await fetch(`${baseUrl}${param}`)
  if (response.status === 200) {
    return await response.json()
  } else {
    console.log(response)
  }
}