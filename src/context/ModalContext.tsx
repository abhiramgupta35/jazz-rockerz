"use client";

import React, { createContext, useContext, useState } from "react";

import {
  DEFAULT_GENERAL_ENQUIRY_MESSAGE,
  JAZZROCKERS_WHATSAPP_DISPLAY,
  JAZZROCKERS_WHATSAPP_NUMBER,
  WhatsAppModalOptions,
  openWhatsApp,
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

  // Brochure Download Modal State
  isBrochureOpen: boolean;
  openBrochureModal: () => void;
  closeBrochureModal: () => void;
}

const defaultWhatsAppData: WhatsAppModalOptions = {
  title: "Chat with Jazzrockers on WhatsApp",
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
  const [defaultProgram, setDefaultProgram] = useState("");

  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppData, setWhatsAppData] = useState<WhatsAppModalOptions>(defaultWhatsAppData);

  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const openModal = (initialProgram?: string) => {
    setDefaultProgram(initialProgram || "");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openWhatsAppModal = (options?: WhatsAppModalOptions) => {
    if (options?.onConfirm) {
      options.onConfirm();
    }
    openWhatsApp(options?.phone, options?.message || defaultWhatsAppData.message);
  };

  const closeWhatsAppModal = () => {
    setIsWhatsAppOpen(false);
  };

  const openBrochureModal = () => {
    setIsBrochureOpen(true);
  };

  const closeBrochureModal = () => {
    setIsBrochureOpen(false);
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
        isBrochureOpen,
        openBrochureModal,
        closeBrochureModal,
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

