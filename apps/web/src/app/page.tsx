import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-repeat opacity-5"></div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-10"></div>
        <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-black"></div>
      </div>

      <header className="relative flex justify-center items-center py-4 px-8">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent absolute left-8"
        >
          GrantX
        </Link>

        <nav className="flex space-x-6">
          <Link href="/" className="hover:underline">
            About
          </Link>
          <Link href="/" className="hover:underline">
            Blog
          </Link>
          <Link href="/" className="hover:underline">
            Resources
          </Link>
          <Link href="/" className="hover:underline">
            Docs
          </Link>
          <Link href="/" className="hover:underline">
            Contact
          </Link>
        </nav>
        <div className="absolute right-8 space-x-4">
          <Link href="/signup">
            <Button variant="outline">Sign in</Button>
          </Link>
          <Link href="/get-started">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>
      <main className="relative flex flex-col items-center justify-center flex-1 px-8 py-24 text-center">
        <Link href="https://github.com/grantx-dev/grantx">
        <Button className="bg-gradient-to-r from-green-400 to-blue-500 text-black rounded-full px-6 py-6 mb-10 flex items-center justify-center">
        Don't miss out on our Github
        </Button>

        </Link>
        <h1 className="text-6xl font-bold mb-4">Effortless API Management</h1>
        <p className="text-lg mb-8 text-gray-400">
          Control access, set rate limits, and revoke keys seamlessly.
          <br />
          Simplify your workflow, focus on coding brilliance!
        </p>
        <div className="space-x-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link href="/get-started">
              <Button
                size="lg"
                className="relative bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 hover:bg-black hover:text-gray-100"
              >
                <span className="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="pr-6 text-gray-100"> Get Started</span>
                </span>
                <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                  {" "}
                  Docs &rarr;
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
