import { useLocalStorage } from 'usehooks-ts';

export type OpenChatProps = boolean

export default function useOpenChat() {
  const [isOpen, setIsOpen] = useLocalStorage<OpenChatProps>("chatOpen", false);

  return [isOpen, setIsOpen] as const;
}
