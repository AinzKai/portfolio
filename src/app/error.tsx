"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center py-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Something went wrong
      </h2>
      <p className="text-muted mb-6 max-w-md">
        An unexpected error occurred. Please try refreshing the page or
        navigating back to the homepage.
      </p>
      <div className="flex gap-3">
        <Button onClick={reset} variant="primary" size="md">
          Try again
        </Button>
        <Button
          onClick={() => router.push("/")}
          variant="secondary"
          size="md"
        >
          Go home
        </Button>
      </div>
    </div>
  );
}
