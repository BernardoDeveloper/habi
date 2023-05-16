import { render } from 'preact'
import { App } from './app.tsx'

import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './assets/global.css'

render(<App />, document.getElementById('app') as HTMLElement)
