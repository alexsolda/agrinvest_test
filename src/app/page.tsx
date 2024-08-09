import CardContainer from './components/CardContainer'
import Wrapper from './components/Wrapper'

const Home = () => {
  return (
    <main className="w-full my-6 md:my-0 lg:my-0 min-h-[calc(100vh-65px)] flex items-center justify-center">
      <Wrapper className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
      </Wrapper>
    </main>
  )
}

export default Home
