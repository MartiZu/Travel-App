async function getTravels(id) {
    const response = await fetch(`http://localhost:4000/travels/${id}`, {
      next: {
        revalidate: 0,
      },
    });
  
    const travels = await response.json();
  
    return travels;
  }
  
  export default async function travel({ params }) {
    const id = params.id;
    const travel = await getTravels(id);
  
    return (
      <main className="h-screen">
        <div className="flex justify-center">
          <div
            className="mx-32 my-8 p-8 w-full max-w-4xl bg-gray-100 leading-loose rounded-lg"
            key={travel.id}
          >
            <h2 className="font-bold text-3xl pb-4">{travel.title}</h2>
            <p className="text-xl pb-4">
              {travel.author} - Room {travel.room}
            </p>
  
            <p className="text-xl pb-4">{travel.description}</p>
            <button
              className={`${
                travel.status === "open"
                  ? "bg-green-500"
                  : travel.status === "under review"
                  ? "bg-yellow-600"
                  : "bg-red-500"
              } py-2 px-4 text-center uppercase rounded-md`}
            >
              {travel.status}
            </button>
          </div>
        </div>
      </main>
    );
  }
  