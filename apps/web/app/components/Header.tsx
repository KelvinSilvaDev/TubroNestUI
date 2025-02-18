"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-background border-b border-border">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-foreground">Logo</span>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button>Sign In</Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </div>
    {isMenuOpen && (
      <div className="md:hidden bg-background">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent"
          >
            Contact
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-border">
          <div className="px-2">
            <Button className="w-full">Sign In</Button>
          </div>
        </div>
      </div>
    )}
  </header>
  )
}

export default Header
