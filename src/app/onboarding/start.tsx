import { Button } from '../../components/button'
import Community from '../../assets/Community.svg'

export function Start() {
    return (
        <section className="w-screen h-screen py-14 px-10 flex flex-col items-center justify-between">
            <pre className="font-klasik text-4xl text-center tracking-tight leading-9">
                Join a supportive{'\n'} community
            </pre>

            <img src={Community} alt="community image" className="max-h-96" />

            <pre className="font-bold text-base text-center font-manrope text-base">
                We can help you to be a better{'\n'} version of yourself.
            </pre>

            <Button href="/home">Get Started</Button>
        </section>
    )
}
