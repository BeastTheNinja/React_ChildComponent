import Card from './Components/Card'
import PageWrapper from './Components/PageWrapper'

function App() {
  const cardData = [
    {
      title: 'Solopgang og ro',
      textContent: 'Blide farver og stille morgenlys til et roligt startpunkt.',
      image:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
      footerContent: 'Landskab'
    },
    {
      title: 'Byliv i bevagelse',
      textContent: 'Mennesker, lys og energi samlet i et enkelt blik.',
      image:
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80',
      footerContent: 'Urban'
    },
    {
      title: 'Skovens dybde',
      textContent: 'Klassiske gronne toner, der giver plads til fordybelse.',
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
      footerContent: 'Natur'
    },
    {
      title: 'Hav og horisont',
      textContent: 'En ren horisontlinje med fokus pa luft og perspektiv.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      footerContent: 'Kyst'
    },
    {
      title: 'Sten og struktur',
      textContent: 'Tekstur og former, som skaber kontrast og dybde.',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
      footerContent: 'Detalje'
    }
  ]

  return (
    <PageWrapper title="React Child Components" subtitle="Kort lavet med .map og props">
      {cardData.map((card) => (
        <Card key={card.title} data={card} />
      ))}
    </PageWrapper>
  )
}

export default App
