import {cookies, headers} from 'next/headers'

import {getRequestConfig} from 'next-intl/server'

import {COOKIE_LANGUAGE} from '@/config/tokens'
import {fallbackLanguage, supportedLanguages} from '@/locales/config'

export const getLocale = async () => {
  const cookiesStore = await cookies()
  const headersStore = await headers()

  // verify if it was set a custom language on the app settings
  const appLanguage = cookiesStore.get(COOKIE_LANGUAGE)?.value

  // get the languages used on the user browser
  const browserLanguages = headersStore.get('Accept-Language')
  // get only the first option
  const firstLanguage = browserLanguages?.split(',')[0]

  // the language defined by the app has priority over the browser
  const selectedLanguage = (appLanguage ?? firstLanguage) as string

  // verify if the language is supported by the app
  const lang = supportedLanguages.find(lang => lang == selectedLanguage)

  // if the language is supported then set it as the app language
  // otherwise set a fallback language
  const locale = lang ? selectedLanguage : fallbackLanguage

  return locale
}

export default getRequestConfig(async () => {
  const locale = await getLocale()

  return {
    locale,
    messages: (await import(`../../locales/${locale}.json`)).default,
  }
})
