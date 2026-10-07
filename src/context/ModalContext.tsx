"use client";

import React, { createContext, useContext, useState } from "react";

import {
  DEFAULT_GENERAL_ENQUIRY_MESSAGE,
  JAZZROCKERS_WHATSAPP_DISPLAY,
  JAZZROCKERS_WHATSAPP_NUMBER,
  WhatsAppModalOptions,
} from "@/lib/whatsapp";

interface ModalContextType {
  // Free Trial Modal State
  isOpen: boolean;
  openModal: (initialProgram?: string) => void;
  closeModal: () => void;
  defaultProgram: string;

  // WhatsApp Confirmation Modal State
  isWhatsAppOpen: boolean;
  whatsAppData: WhatsAppModalOptions;
  openWhatsAppModal: (options?: WhatsAppModalOptions) => void;
  closeWhatsAppModal: () => void;
}

const defaultWhatsAppData: WhatsAppModalOptions = {
  title: "Chat with JazzRockers on WhatsApp",
  subtitle: "Connect with our admissions & program advisory team directly on WhatsApp.",
  phone: JAZZROCKERS_WHATSAPP_NUMBER,
  displayPhone: JAZZROCKERS_WHATSAPP_DISPLAY,
  message: DEFAULT_GENERAL_ENQUIRY_MESSAGE,
  badge: "Official WhatsApp",
  isFormSubmission: false,
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultProgram, setDefaultProgram] = useState("Dance");

  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppData, setWhatsAppData] = useState<WhatsAppModalOptions>(defaultWhatsAppData);

  const openModal = (initialProgram?: string) => {
    if (initialProgram) {
      setDefaultProgram(initialProgram);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openWhatsAppModal = (options?: WhatsAppModalOptions) => {
    setWhatsAppData({
      title: options?.title || defaultWhatsAppData.title,
      subtitle: options?.subtitle || defaultWhatsAppData.subtitle,
      phone: options?.phone || defaultWhatsAppData.phone,
      displayPhone: options?.displayPhone || defaultWhatsAppData.displayPhone,
      message: options?.message || defaultWhatsAppData.message,
      badge: options?.badge || (options?.isFormSubmission ? "Form Submitted" : defaultWhatsAppData.badge),
      isFormSubmission: Boolean(options?.isFormSubmission),
      onConfirm: options?.onConfirm,
    });
    setIsWhatsAppOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsWhatsAppOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        defaultProgram,
        isWhatsAppOpen,
        whatsAppData,
        openWhatsAppModal,
        closeWhatsAppModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

