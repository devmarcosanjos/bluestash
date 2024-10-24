import {getLocale} from 'next-intl/server'

import {Footer, Header} from '@/app/_components'

import {PrivacyPolicyEn} from './components/privacy-policy-en'
import {PrivacyPolicyPt} from './components/privacy-policy-pt'

const PrivacyPolicyPage = async () => {
  const locale = await getLocale()

  return (
    <div className='flex min-h-screen w-full flex-col items-center'>
      <Header />
      <div className='w-full flex-1 bg-base-200'>
        <div className='mx-auto flex w-full max-w-screen-lg flex-col'>
          <main className='w-full py-10'>
            {locale === 'pt-BR' ? <PrivacyPolicyPt /> : <PrivacyPolicyEn />}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default PrivacyPolicyPage
