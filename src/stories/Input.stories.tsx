import { Meta, StoryObj } from '@storybook/react'
import Input from '@/components/Input'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Input>

const meta: Meta<StoryProps> = {
  component: Input,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: {
    error: ''
  }
}
