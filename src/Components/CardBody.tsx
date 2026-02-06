type CardBodyProps = {
    content?: string
}

function CardBody({ content = 'Intet indhold endnu' }: CardBodyProps) {
    return <p className="text-sm leading-relaxed text-stone-600">{content}</p>
}

export default CardBody
