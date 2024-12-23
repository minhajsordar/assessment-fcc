"use server"
import { headers } from 'next/headers'

export const getUserAgent = async()=> {
    const headersList = headers()
    console.log(headersList.get('user-agent'))
    return headersList.get('user-agent')
  }
  