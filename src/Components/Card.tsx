import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'

type CardData = {
    title?: string
    textContent?: string
    footerContent?: string
}

type CardProps = {
    data: CardData
}

function Card({ data }: CardProps) {
    return (
        <article className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <CardHeader text={data.title} />
            <CardBody content={data.textContent} />
            <CardFooter content={data.footerContent} />
        </article>
    )
}

export default Card
