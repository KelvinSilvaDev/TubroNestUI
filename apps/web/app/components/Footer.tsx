import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-foreground">Logo</Link>
            <p className="mt-4 text-sm text-muted-foreground">Your company slogan or a brief description can go here.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-base text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link href="/about" className="text-base text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/services" className="text-base text-muted-foreground hover:text-foreground">Services</Link></li>
              <li><Link href="/contact" className="text-base text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/privacy" className="text-base text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-base text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Social</h3>
            <ul className="mt-4 flex space-x-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-muted-foreground">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-base text-muted-foreground">Designed with ❤️ by Your Name</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
