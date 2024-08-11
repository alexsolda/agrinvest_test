import { Meta, StoryObj } from '@storybook/react'
import ThemeToggleButton from '@/components/Buttons/ThemeToggleButton'
import { ComponentProps } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'

type StoryProps = ComponentProps<typeof ThemeToggleButton>

const meta: Meta<StoryProps> = {
  tags: ['autodocs'],
  component: ThemeToggleButton
}

export default meta

type Story = StoryObj<StoryProps>

export const ThemeToggle: Story = {
  render: () => {
    return (
      <ThemeProvider>
        <ThemeToggleButton />
      </ThemeProvider>
    )
  }
}
