const baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/movie'

export const callApi = async (param) => {
  const response = await fetch(`${baseUrl}${param}`)
  if (response.status === 200) {
    return await response.json()
  } else {
    console.log(response)
  }
}