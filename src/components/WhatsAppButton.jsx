import { useTranslation } from 'react-i18next'

export default function WhatsAppButton() {
  const { t } = useTranslation()

  return (
    <a
      href="https://wa.me/201234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 end-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
      aria-label={t('common.whatsappCta')}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-1 1.1-.2.2-.4.2-.7.1-1-.4-2.1-1.1-3-2-.8-.8-1.4-1.8-1.7-2.3-.2-.3-.1-.5.1-.7.2-.2.4-.5.6-.7.2-.2.2-.4.1-.7-.1-.3-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.7 0-.2 0-.6.1-.9.5-.3.4-1.1 1.1-1.1 2.6 0 1.6 1.1 3.1 1.3 3.3.2.2 2 3.1 4.9 4.2 2.9 1.2 2.9.8 3.4.7.5 0 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.5-.3z" />
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l5-1.4c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.4 14.9 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" />
      </svg>
      <span className="hidden sm:inline">{t('common.whatsappCta')}</span>
    </a>
  )
}
