"use client"

import { useEffect } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  work: {
    title: string
    description: string
    result: string
    image: string
    stack: string
    link: string
  }
}

export default function Modal({ isOpen, onClose, work }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[var(--pc-bg)] border border-[var(--pc-muted)]/20 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--pc-muted)] hover:text-[var(--pc-front)] transition-colors duration-200"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="p-6">
          <img
            src={work.image || "/placeholder.svg"}
            alt={work.title}
            className="w-full aspect-video object-cover rounded-lg mb-6"
          />

          <h3 className="text-2xl font-bold text-[var(--pc-front)] mb-2">{work.title}</h3>

          <p className="text-[var(--pc-muted)] mb-4">{work.description}</p>

          <p className="text-[var(--pc-accent)] mb-4">{work.result}</p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--pc-muted)]">Built with: {work.stack}</span>
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--pc-accent)] hover:text-[var(--pc-gold)] transition-colors duration-200"
            >
              View Live →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
