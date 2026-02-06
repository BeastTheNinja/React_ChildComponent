type CardFooterProps = {
    content?: string
}

function CardFooter({ content = 'Ingen footer' }: CardFooterProps) {
    return (
        <div className="border-t border-stone-200 pt-3 text-xs font-medium uppercase tracking-wide text-stone-500">
            {content}
        </div>
    )
}

export default CardFooter
