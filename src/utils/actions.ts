"use server"

import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

interface CookiePreferences {
  essential: boolean
  analytics: boolean
}

export async function setCookieConsent(preferences: CookiePreferences) {
  const cookieStore = cookies()

  // Store the preferences in a cookie that expires in 1 year
  ;(await cookieStore).set("cookie-preferences", JSON.stringify(preferences), {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  })

  revalidatePath("/")

  return { success: true }
}

export async function getCookieConsent() {
  const cookieStore = cookies()
  const preferences = (await cookieStore).get("cookie-preferences")

  if (!preferences) {
    return null
  }

  try {
    return JSON.parse(preferences.value) as CookiePreferences
  } catch (error) {
    console.error(error);
    return null
  }
}
