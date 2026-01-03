import logo from "./images/logo.svg";
import { useWeather } from "./hooks/useWeather";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const {
    weather,
    loading,
    error,
    activeDay,
    selectedDay,
    setSelectedDay,
    query,
    setQuery,
    handleSearch,
  } = useWeather();

  return (
    <div className="min-h-screen w-full bg-neutral-900 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-left items-center py-6">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <div className="flex flex-col items-center">
          <Header
            loading={loading}
            error={error}
            query={query}
            onSubmit={handleSearch}
            setQuery={setQuery}
          />

          {weather && activeDay ? (
            <Main
              weather={weather}
              activeDay={activeDay}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          ) : (
            !loading && !error
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
