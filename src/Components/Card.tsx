import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'

type CardData = {
    title?: string
    textContent?: string
    image?: string
    footerContent?: string
}

type CardProps = {
    data: CardData
}

function Card({ data }: CardProps) {
    return (
        <article className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <CardHeader text={data.title} />
            {data.image ? (
                <img
                    src={data.image}
                    alt={data.title ?? 'Kort billede'}
                    className="h-40 w-full rounded-xl object-cover"
                    loading="lazy"
                />
            ) : null}
            <CardBody content={data.textContent} />
            <CardFooter content={data.footerContent} />
        </article>
    )
}

export default Card
