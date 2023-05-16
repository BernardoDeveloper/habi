import { useLocation } from 'wouter'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../utils/animation'

export function Page() {
    const [_location, setLocation] = useLocation()

    return (
        <motion.section
            initial={pageAnimation.initial}
            animate={pageAnimation.animate}
            exit={pageAnimation.exit}
            transition={pageAnimation.transition}
            className="bg-[url(onboarding-bg.svg)] w-screen h-screen py-24 px-5 flex flex-col items-center justify-between"
            onClick={() => {
                setLocation('/introduction')
            }}
        >
            <pre className="font-klasik text-4xl text-center tracking-tight leading-9">
                WELCOME TO{'\n'}
                Monumental{'\n'}
                habits
            </pre>
        </motion.section>
    )
}
