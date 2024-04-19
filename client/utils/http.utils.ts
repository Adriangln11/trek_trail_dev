import axios, { AxiosError } from 'axios'
import { FormEvent } from 'react'

export const registerUser = async (e: FormEvent<HTMLFormElement>) => {
  const data = new FormData(e.currentTarget)

  const first_name = data.get('first_name')
  const last_name = data.get('last_name')
  const email = data.get('email')
  const password = data.get('password')
  const country = data.get('country')

  try {
    const res = await axios.post(
      'https://no-country-back.onrender.com/api/users/',
      {
        first_name,
        last_name,
        email,
        password,
        country,
      }
    )
    return res
  } catch (error) {
    return error
  }
}

export const loginUser = async (e: FormEvent<HTMLFormElement>) => {
  const data = new FormData(e.currentTarget)
  const email = data.get('email')
  const password = data.get('password')
  try {
    return await axios.post(
      'https://no-country-back.onrender.com/api/users/login',
      {
        email,
        password,
      }
    )
  } catch (error) {
    return error
  }
}

const encodedParams = new URLSearchParams()
encodedParams.set('location_id', '45963')
encodedParams.set('language', 'es_ES')
encodedParams.set('currency', 'ARG')
encodedParams.set('offset', '0')

const options = {
  method: 'POST',
  url: 'https://tourist-attraction.p.rapidapi.com/search',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '21642ba0b6msh7e5633501d3d0cbp13c0ffjsn485b4a0c76f9',
    'X-RapidAPI-Host': 'tourist-attraction.p.rapidapi.com',
  },
  data: encodedParams,
}

export const getInfo = async () => {
  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
