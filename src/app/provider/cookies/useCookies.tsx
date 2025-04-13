"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/react"
import dynamic from 'next/dynamic'

const CookieModal = dynamic(() => import("@/components/Commons/Cookies/Cookies"), {
  ssr: false
});

export default function ProvidersCookies({ children }: { children: React.ReactNode }) {
  const [showCookieBanner, setShowCookieBanner] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState<{
    essential: boolean
    analytics: boolean
  } | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cookieString = document.cookie.split("; ").find((row) => row.startsWith("cookie-preferences="))

      if (!cookieString) {
        setShowCookieBanner(true)
        return
      }

      try {
        const preferences = JSON.parse(decodeURIComponent(cookieString.split("=")[1]))
        setCookiePreferences(preferences)
      } catch (error) {
        console.error(error);
        setShowCookieBanner(true)
      }
    }
  }, [])

  return (
    <>
      {children}
      {showCookieBanner && <CookieModal />}
      {cookiePreferences?.analytics && <Analytics />}
    </>
  )
}