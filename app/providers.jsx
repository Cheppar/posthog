'use client'

import React from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

export function PostHogProvider({ children }) {
  useEffect(() => {
    // Only initialize PostHog if we have the key
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') posthog.debug() // Enable debug mode in development
        },
      })
    }
  }, [])

  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  )
}

// Internal component that uses useSearchParams - must be wrapped in Suspense
function PostHogPageViewInternal() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Only track on client-side
    if (typeof window === 'undefined') {
      return
    }

    // Track pageviews only if PostHog is initialized
    if (pathname) {
      // Check if PostHog is available and initialized
      if (posthog && (posthog.__loaded || posthog.config?.loaded)) {
        let url = window.origin + pathname
        if (searchParams && searchParams.toString()) {
          url = url + `?${searchParams.toString()}`
        }
        posthog.capture('$pageview', {
          $current_url: url,
        })
      } else {
        // Wait a bit for PostHog to initialize
        const timer = setTimeout(() => {
          if (posthog && (posthog.__loaded || posthog.config?.loaded)) {
            let url = window.origin + pathname
            if (searchParams && searchParams.toString()) {
              url = url + `?${searchParams.toString()}`
            }
            posthog.capture('$pageview', {
              $current_url: url,
            })
          }
        }, 100)
        return () => clearTimeout(timer)
      }
    }
  }, [pathname, searchParams])

  return null
}

// Public component that wraps the internal one in Suspense
export function PostHogPageView() {
  return (
    <React.Suspense fallback={null}>
      <PostHogPageViewInternal />
    </React.Suspense>
  )
}
