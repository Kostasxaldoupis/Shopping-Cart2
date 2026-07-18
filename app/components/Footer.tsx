import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        {/* Brand */}
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight">
            Football<span className="text-primary">Store</span>
          </Link>

          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Premium football store inspired by the world&apos;s biggest sport.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          <div>
            <h3 className="mb-3 font-semibold">Pages</h3>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>

              <Link href="/store" className="hover:text-foreground">
                Store
              </Link>

              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Follow</h3>

            <div className="flex gap-4">
              <Link href="https://github.com/kostasxaldoupis" target="_blank">
                <FaGithub className="h-5 w-5 text-muted-foreground transition hover:text-foreground" />
              </Link>

              {/* <Link href="https://linkedin.com/in/yourusername" target="_blank">
                <FaLinkedin className="h-5 w-5 text-muted-foreground transition hover:text-foreground" />
              </Link> */}
              {/* 
              <Link href="https://instagram.com/yourusername" target="_blank">
                <FaInstagram className="h-5 w-5 text-muted-foreground transition hover:text-foreground" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-muted-foreground">
          <p>© 2026 FootballStore. All rights reserved.</p>

          <p>Built with Next.js & shadcn/ui</p>
        </div>
      </div>
    </footer>
  );
}
