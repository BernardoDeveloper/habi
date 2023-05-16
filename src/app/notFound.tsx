import { Link } from 'wouter'

export function NotFound() {
    return (
        <section className="w-screen h-screen flex flex-col items-center justify-center">
            <h3 className="font-klasik text-4xl">Page Not Found 🤔</h3>
            <Link href="/">
                <a className="underline">back to home.</a>
            </Link>
        </section>
    )
}
