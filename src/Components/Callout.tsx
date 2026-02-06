type CalloutProps = {
    text: string
}

function Callout({ text }: CalloutProps) {
    return (
        <aside className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 text-amber-900 md:col-span-2">
            <p className="text-base font-medium">{text}</p>
        </aside>
    )
}

export default Callout
