import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About 5Letters" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Provided by Abrom Douglas III
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Based on open source code
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Here's the {' '}
        <a
          href="https://ad3.in/5letters"
          target="_blank"
          rel="noreferrer noopener"
          className="underline font-bold"
        >
          forked version
        </a>{' '}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Here's the {' '}
        <a
          href="https://github.com/cwackerfuss/word-guessing-game"
          target="_blank"
          rel="noreferrer noopener"
          className="underline font-bold"
        >
          original version
        </a>{' '}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Enjoying the game? Make sure to show your {' '}
        <a
          href="https://abrom.me/support"
          target="_blank"
          rel="noreferrer noopener"
          className="underline font-bold"
        >
          support!
        </a>{' '}
      </p>
    </BaseModal>
  )
}