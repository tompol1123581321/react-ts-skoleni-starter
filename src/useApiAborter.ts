import { useCallback, useRef } from "react";

export const useApiAborter = () => {
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleAbortAndReReference = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current?.abort();
    }

    // Create a new AbortController for the new request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
  }, []);

  return {
    siginal: abortControllerRef.current?.signal,
    handleAbortAndReReference,
  };
};
