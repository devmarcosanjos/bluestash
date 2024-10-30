import Link from 'next/link'

import { InstagramIcon, XIcon } from '@/app/_components/icons'

export const Footer = () => {
  return (
    <footer className='footer footer-center gap-6 rounded bg-base-100 p-8 text-base-content'>
      <nav className='grid grid-flow-col gap-4'>
        <Link href='/privacy-policy' className='link-hover link'>
          Sobre
        </Link>
        <Link href='/contact' className='link-hover link'>
          Contato
        </Link>
        <Link href='/privacy-policy' className='link-hover link'>
          Políticas de privacidade
        </Link>
      </nav>
      <nav>
        <div className='grid grid-flow-col gap-4'>
          <a>
            <XIcon width={24} />
          </a>
          <a>
            <InstagramIcon width={24} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{' '}
          <Link target='_blank' href='https://blue'>
            BlueStash Software
          </Link>
        </p>
      </aside>
    </footer>
  )
}
