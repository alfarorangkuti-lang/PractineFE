'use client'

import { useEffect } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    message: string;
    type?: 'success' | 'error' | 'warning';
    autoClose?: boolean;
};

export default function NotificationModal({
    isOpen,
    onClose,
    message,
    type = 'success',
    autoClose = true
}: Props) {

    useEffect(() => {
        if (autoClose && isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, autoClose, onClose]);

    if (!isOpen) return null;

    const color = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500'
    }[type];

    return (
        <div className="fixed inset-0 flex items-start top-7 justify-center z-50">
            {/* backdrop */}
            <div 
                className="absolute inset-0"
                onClick={onClose}
            />

            {/* modal */}
            <div className={`relative px-6 py-4 rounded-xl text-white shadow-lg ${color} animate-scaleIn`}>
                <p className="text-sm font-medium">{message}</p>
            </div>
        </div>
    );
}