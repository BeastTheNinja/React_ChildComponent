type CardHeaderProps = {
    text?: string
}

function CardHeader({ text = 'Ingen overskrift' }: CardHeaderProps) {
    return (
        <div className="border-b border-stone-200 pb-3">
            <h3 className="text-lg font-semibold text-stone-900">{text}</h3>
        </div>
    )
}

export default CardHeader
