import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is a fork of an open source word guessing game
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Modified by Abrom Douglas
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Check out the source code {' '}
        <a
          href="https://ad3.in/word-guess"
          className="underline font-bold"
        >
          here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
