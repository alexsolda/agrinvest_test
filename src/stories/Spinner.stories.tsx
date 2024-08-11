import { Meta, StoryObj } from '@storybook/react'
import Spinner from '@/components/Spinner'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Spinner>

const meta: Meta<StoryProps> = {
  component: Spinner,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {}
