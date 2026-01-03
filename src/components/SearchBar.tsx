import { Search } from "lucide-react";

interface SearchBarProps {
  query: string;
  setQuery: (val: string) => void;
  onSearch: (e: React.FormEvent) => void;
  loading: boolean;
}

export const SearchBar = ({
  query,
  setQuery,
  onSearch,
  loading,
}: SearchBarProps) => (
  <form onSubmit={onSearch} className="relative w-full max-w-md mb-12">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for a city..."
      className="w-full bg-neutral-700 rounded-xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
    <button
      type="submit"
      disabled={loading}
      className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 px-3 py-1 rounded-lg text-sm"
    >
      {loading ? "..." : "Search"}
    </button>
  </form>
);
