import type { ReactNode } from 'react'

type PageWrapperProps = {
    title: string
    subtitle: string
    children: ReactNode
}

function PageWrapper({ title, subtitle, children }: PageWrapperProps) {
    return (
        <section className="min-h-screen bg-[radial-gradient(circle_at_top,#f3e9d9_0%,#f8f6f2_35%,#efece7_100%)] px-6 py-12 text-stone-900">
            <div className="mx-auto max-w-4xl">
                <header className="mb-10 space-y-3">
                    <h1 className="text-4xl font-serif tracking-tight md:text-5xl">{title}</h1>
                    <h2 className="text-lg text-stone-600 md:text-xl">{subtitle}</h2>
                </header>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{children}</div>
            </div>
        </section>
    )
}

export default PageWrapper
