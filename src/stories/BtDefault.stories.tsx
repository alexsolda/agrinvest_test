import { Meta, StoryObj } from '@storybook/react'
import BtDefault from '@/components/Buttons/BtDefault'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof BtDefault>

const meta: Meta<StoryProps> = {
  component: BtDefault,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: {
    title: 'Button',
    outlined: false
  }
}
