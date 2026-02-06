import Callout from './Components/Callout'
import FeatureCard from './Components/FeatureCard'
import PageWrapper from './Components/PageWrapper'

function App() {
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
      <Callout text="Her er et ekstra child component i sin egen fil." />
    </PageWrapper>
  )
}

export default App
