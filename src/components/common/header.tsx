'use client'
import { cn } from '../../lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/components/ui/drawer'
import { MenuIcon, X } from 'lucide-react'
import { Typography } from '@/components/Typography'
import { ProfileForm } from '@/screens/HomePage/content/Connect/ProfileForm'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Header({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    window.location.href = '/'
  }

  const items = [
    {
      href: '/photo-gallery',
      title: 'Photo Gallery',
    },
    {
      href: 'mailto:zadrachcaunca777@gmail.com',
      title: 'Contact'
    }
  ]

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <Typography variant="overline" className='text-hislife-100' >HIS LIFE METRO</Typography>
    </Link>
  )

  const getAuthButtons = () => (
    <div className="flex gap-3 items-center">
      <ProfileForm />
      {isLoggedIn ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Link href="/admin-page" key="login">
          <Button>Login</Button>
        </Link>
      )}
    </div>
  )

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            (pathname && pathname.includes(item.href))
          return (
            <Link
              href={item.href}
              className="pointer text-black block w-fit"
              key={item.title}
            >
              <Typography
                variant="paragraph_md"
                className={cn(selected && 'text-primary')}
              >
                {item.title}
              </Typography>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <div
      className={cn(
        `flex md:h-14 h-14 bg-basewhite-50 items-center justify-center w-full
          border-b`,
        className
      )}
    >
      <div className="w-full lg:px-40 px-10">
        {/* Desktop */}
        <div className="flex items-center gap-x-8 w-full">
          <div className="md:flex-0 min-w-fit flex-1">
            {getLogo()}
          </div>
          <div className="hidden md:flex items-center w-full">
            <div className="flex items-center gap-x-8 flex-1">
              {getHeaderItems()}
            </div>
            {getAuthButtons()}
          </div>
          {/* Mobile */}
          <div className="md:hidden flex gap-x-4 items-center">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <MenuIcon className='text-basewhite-100' />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">
                    {getHeaderItems()}
                  </div>
                  <div className='flex flex-col '>
                    {getAuthButtons()}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}
