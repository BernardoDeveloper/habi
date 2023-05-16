import { motion } from 'framer-motion'
import { useState } from 'preact/hooks'
import { useLocation } from 'wouter'
import { pageAnimation } from '../../utils/animation'

import img1 from '../../assets/Incentivate.svg'
import img2 from '../../assets/Habits.svg'
import img3 from '../../assets/Progress.svg'

export function Introduction() {
    const [currentPage, setCurrentPage] = useState(0)
    const [_location, setLocation] = useLocation()
    const [position, setPosition] = useState(0)

    const nextPage = () => {
        if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1)
        else setLocation('start')
    }

    const pages = [
        {
            id: 0,
            title: 'welcome to\n monumental habits',
            description:
                'We can help you to be a better\n version of yourself.',
            imgSrc: img1,
        },
        {
            id: 1,
            title: 'create new\n habit easily',
            description:
                'Good habits influence many things\n in your daily life.',
            imgSrc: img2,
        },
        {
            id: 2,
            title: 'keep track of your\n progress',
            description:
                'Visualizing your progress\n can help you keep constant.',
            imgSrc: img3,
        },
    ]

    setCurrentPage(Math.min(pages.length - 1, currentPage))

    return (
        <motion.section
            initial={pageAnimation.initial}
            animate={pageAnimation.animate}
            exit={pageAnimation.exit}
            className="w-screen h-screen py-14 px-10 flex flex-col items-center justify-between"
        >
            {pages.map((page, i) => (
                <>
                    {i == currentPage ? (
                        <>
                            <pre class="font-klasik text-3xl text-center tracking-tight leading-9">
                                {page.title}
                            </pre>

                            <img src={page.imgSrc} className="max-h-96" />

                            <pre className="font-bold text-base text-center font-manrope text-base">
                                {page.description}
                            </pre>

                            {setPosition(i)}
                        </>
                    ) : null}
                </>
            ))}

            <div className="w-full flex items-center justify-between font-manrope font-bold">
                <button
                    onClick={() => {
                        setLocation('/start')
                    }}
                >
                    Skip
                </button>

                <ul className="flex items-center space-x-2">
                    <span
                        className={`w-3 h-3 ${
                            position == 0 ? 'bg-secondary' : 'bg-primary'
                        } rounded-full`}
                    />
                    <span
                        className={`w-3 h-3 ${
                            position == 1 ? 'bg-secondary' : 'bg-primary'
                        } rounded-full`}
                    />
                    <span
                        className={`w-3 h-3 ${
                            position == 2 ? 'bg-secondary' : 'bg-primary'
                        } rounded-full`}
                    />
                    <span
                        className={`w-3 h-3 ${
                            position == 3 ? 'bg-secondary' : 'bg-primary'
                        } rounded-full`}
                    />
                </ul>

                <button onClick={nextPage}>Next</button>
            </div>
        </motion.section>
    )
}
