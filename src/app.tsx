import { Route, Switch } from 'wouter'
import { AnimatePresence } from 'framer-motion'

import { Page } from './app/onboarding/page'
import { Introduction } from './app/onboarding/introduction'
import { NotFound } from './app/notFound'
import { Start } from './app/onboarding/start'

export function App() {
    return (
        <AnimatePresence>
            <section className="font-manrope text-primary">
                <Switch>
                    <Route path="/" component={Page} />
                    <Route path="/introduction" component={Introduction} />
                    <Route path="/start" component={Start} />

                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </section>
        </AnimatePresence>
    )
}
