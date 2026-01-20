import logo from "./images/logo.svg";
import { useWeatherStore } from "./store/useWeatherStore";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const {
    weather,
    loading,
    error,
    selectedDay,
    setSelectedDay,
    query,
    setQuery,
    search, 
  } = useWeatherStore();


  const activeDay = useWeatherStore(
    (state) => state.weather?.forecast?.[state.selectedDay],
  );

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      search(query);
    }
  };

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
            onSubmit={onFormSubmit}
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
            !loading &&
            !error && (
              <p className="mt-10 text-gray-400">
                Введите название города, чтобы узнать погоду
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
