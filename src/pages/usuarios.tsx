import Header from '@/components/Header'
import Title from '@/components/Typography/Title'
import Wrapper from '@/components/Wrapper'
import { IUserData } from '@/hooks/useUsers'
import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'

type IUserProps = {
  initialData: IUserData[]
}

const Users = ({ initialData }: IUserProps): ReactElement => {
  return (
    <div
      className={`text-black-900 dark:text-white font-nunito min-h-screen bg-zinc-200 dark:bg-custom-radial dark:animate-pulseBG transition-all`}
    >
      <Header />
      <Wrapper className="mt-6">
        <Title text="Listagem de usuários" />
        <ul className="mt-6 flex flex-col gap-3">
          {initialData.map((data) => (
            <div
              key={data.id}
              className="flex items-center justify-between gap-12 py-3 border-b border-zinc-400 dark:border-neutral-800"
            >
              <p>{data.name}</p>
              <p>{data.email}</p>
            </div>
          ))}
        </ul>
      </Wrapper>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!response.ok) {
    return {
      props: {
        initialData: []
      }
    }
  }

  const initialData: IUserData[] = await response.json()

  return {
    props: {
      initialData
    }
  }
}

export default Users
