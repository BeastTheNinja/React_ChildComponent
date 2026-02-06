type FeatureCardProps = {
    title: string
    description: string
}

function FeatureCard({ title, description }: FeatureCardProps) {
    return (
        <article className="rounded-2xl border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-xl font-semibold text-stone-900">{title}</h3>
            <p className="mt-2 leading-relaxed text-stone-600">{description}</p>
        </article>
    )
}

export default FeatureCard
