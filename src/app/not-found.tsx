import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-5">
        <div className="w-16 h-16 rounded-full bg-red- text-brand-primary mx-auto flex items-center justify-center font-black text-2xl">
          404
        </div>
        <h1 className="text-3xl font-extrabold text-brand-secondary tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-600">
          The page you are looking for might have been moved or doesn&apos;t exist. Return to JazzRockers homepage to discover our programs.
        </p>
        <div className="pt-2">
          <Link href="/">
            <Button
              variant="primary"
              size="md"
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              BACK TO HOME
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
