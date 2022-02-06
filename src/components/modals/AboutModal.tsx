import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About 5Letters" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Brought to you by Abrom Douglas III
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Based on open source word guessing game
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Check out the source code {' '}
        <a
          href="https://ad3.in/5letters"
          className="underline font-bold"
        >
          here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
