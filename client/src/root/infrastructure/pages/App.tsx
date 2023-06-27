import { PROGRAM_ENTITY } from "@entities/programs";
import { newProgram, programUpdate } from "./dummyProgram";

function App() {
  const { listPrograms } = PROGRAM_ENTITY.useViewModel();
  const { data, error, isLoading, isFetching, isSuccess } = listPrograms({});

  return (
    <>
      <h1>React Redux Toolkit RTK Query Tutorial</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map((registration) => {
            return (
              <div className="data" key={registration.id}>
                <span>{registration.id}</span>
                <span>
                  <ProgramDetail id={registration.id || 0} />
                </span>
              </div>
            );
          })}
        </div>
      )}

      <div>
        <MainComponent />
      </div>
    </>
  );
}

export const ProgramDetail = ({ id }: Record<string, string | number>) => {
  const { readProgram } = PROGRAM_ENTITY.useViewModel();
  const { data } = readProgram(id);
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export const MainComponent = () => {
  const { createProgram, updateProgram, deleteProgram } =
    PROGRAM_ENTITY.useViewModel();

  const addHandler = async () => {
    await createProgram(newProgram);
  };

  const updateHandler = async () => {
    await updateProgram(programUpdate);
  };

  const deleteHandler = async () => {
    await deleteProgram(newProgram.id);
  };

  return (
    <>
      <button onClick={addHandler}>Add Program</button>
      <button onClick={updateHandler}>Update Program</button>
      <button onClick={deleteHandler}>Delete Program</button>
    </>
  );
};

export default App;
