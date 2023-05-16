import { ComponentChildren } from 'preact'
import { Link } from 'wouter'

interface ButtonProps {
    href: String
    children: ComponentChildren
}

export function Button(props: ButtonProps) {
    return (
        <Link href={props.href}>
            <a className="w-full h-16 flex items-center justify-center bg-secondary rounded-lg text-base font-bold">
                {props.children}
            </a>
        </Link>
    )
}
