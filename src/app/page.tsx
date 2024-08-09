import CardContainer from '../components/CardContainer'
import Wrapper from '../components/Wrapper'

import { IoListCircle } from 'react-icons/io5'

const Home = () => {
  return (
    <main className="w-full my-6 md:my-0 lg:my-0 min-h-[calc(100vh-65px)] flex items-center justify-center">
      <Wrapper className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <CardContainer
          title="Listagem de itens"
          Icon={IoListCircle}
          href="/itens"
        />
      </Wrapper>
    </main>
  )
}

export default Home
