import React from "react";
import { SearchForm } from "./SearchForm";
interface SearhFormProps {
  loading: boolean;
  setQuery: (val: string) => void;
  query: string;
  onSubmit: (e: React.FormEvent) => void;
  error: string | null;
}

export const Header = ({
  loading,
  query,
  setQuery,
  onSubmit,
  error,
}: SearhFormProps) => {
  return (
    <>
      <h1 className="font-bold text-center text-[clamp(2rem,5vw,3.5rem)] p-[clamp(1rem,5vw,3.5rem)] ">
        How's the sky looking today?
      </h1>

      <SearchForm
        loading={loading}
        onSubmit={onSubmit}
        query={query}
        setQuery={setQuery}
      />

      {error && (
        <p className="text-red-500 mb-4 bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
          {error}
        </p>
      )}
    </>
  );
};
