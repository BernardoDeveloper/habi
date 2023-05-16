import { ComponentChildren } from 'preact'

interface textColorProps {
    children: ComponentChildren
}

export function Secondary(props: textColorProps) {
    return <span className="text-secondary">{props.children}</span>
}
