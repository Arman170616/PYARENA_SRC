import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PyArena</h3>
            <p className="text-muted-foreground">
              Empowering learners in programming, web development, AI/ML, and DevOps.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/terms">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>Email: info@pyarena.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Tech Street, Coding City, 12345</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          © {new Date().getFullYear()} PyArena. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

