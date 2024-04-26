import { GetCity } from '@/types/getCity'
import { PostCity } from '@/types/postCity'
import { PostPlace } from '@/types/postPlace'
import { Trip } from '@/types/trip'
import axios, { AxiosError, AxiosResponse } from 'axios'
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
      'https://no-country-back.onrender.com/api/users',
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

export const getUserById = async (userId: string, token: string) => {
  try {
    const res = await axios.get(
      `https://no-country-back.onrender.com/api/users/${userId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return res
  } catch (e) {
    return e
  }
}

export const getPlaceById = async (id: string) => {
  const res = await axios.get(
    `https://no-country-back.onrender.com/api/places/${id}`
  )
  return res
}

export const getAllReviews = async () => {
  const res = await axios.get('https://no-country-back.onrender.com/api/trip')

  return res
}

export const createTripPost = async (tripData: Trip, token: string) => {
  try {
    const res = await axios.post(
      'https://no-country-back.onrender.com/api/trip',
      tripData,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return res
  } catch (e) {
    return e
  }
}
export const getTrips = async () => {
  try {
    const res = await axios.get(
      'https://no-country-back.onrender.com/api/trip',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    return res
  } catch (e) {
    return e
  }
}
export const postPlace = async (data: PostPlace) => {
  try {
    const res = await axios.post(
      'https://no-country-back.onrender.com/api/places',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    return res
  } catch (e) {
    return e
  }
}

export const getPlaces = async () => {
  try {
    const res = await axios.get(
      'https://no-country-back.onrender.com/api/places',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    return res
  } catch (e) {
    return e
  }
}

export const postCity = async (cityData: PostCity, token: string) => {
  try {
    const res = await axios.post(
      'https://no-country-back.onrender.com/api/city',
      cityData,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log(res)
    return res
  } catch (e) {
    return e
  }
}

export const getCities = async () => {
  try {
    const res = await axios.get(
      'https://no-country-back.onrender.com/api/city',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return res
  } catch (e) {
    return e
  }
}
