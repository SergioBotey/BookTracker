import { useEffect, useState } from "react";
import { getCurrentUser } from "../api/authApi";
import type { User } from "../types/auth";
import { clearAuthStorage, setStoredUser } from "../utils/authStorage";

interface UseCurrentUserResult {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export function useCurrentUser(): UseCurrentUserResult {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      try {
        const currentUser = await getCurrentUser();

        if (!isMounted) {
          return;
        }

        setUser(currentUser);
        setStoredUser(currentUser);
      } catch {
        if (!isMounted) {
          return;
        }

        clearAuthStorage();
        setError("Session is invalid or expired.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return { user, isLoading, error };
}