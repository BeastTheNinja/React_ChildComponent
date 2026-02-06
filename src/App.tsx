import Callout from './Components/Callout'
import Card from './Components/Card'
import FeatureCard from './Components/FeatureCard'
import PageWrapper from './Components/PageWrapper'

function App() {
  const cardData = {
    textContent: 'Dette er card body indholdet, som kommer fra App.',
    title: 'Card titel fra App',
    footerContent: 'Footer tekst fra App'
  }

  return (
    <PageWrapper title="React Child Components" subtitle="Alt kommer fra props">
      <FeatureCard
        title="Genbrugelige komponenter"
        description="Denne komponent er et child component inde i wrapperen."
      />
      <FeatureCard
        title="Props hele vejen"
        description="Bade titel og tekst sendes ned som props."
      />
      <Card data={cardData} />
      <Callout text="Her er et ekstra child component i sin egen fil." />
    </PageWrapper>
  )
}

export default App
