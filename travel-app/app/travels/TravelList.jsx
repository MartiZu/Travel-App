import Link from "next/link";

async function getTravels() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("http://localhost:4000/travels", {
    next: {
      revalidate: 0,
    },
  });

  const Travels = await response.json();

  return travels;
}

export default async function TravelList() {
  const travels = await getTravels();

  return (
    <main className="flex flex-col justify-center items-center shrink-0">
      {travels.map((travel) => (
        <div
          className="mx-32 my-8 p-8 w-full max-w-4xl bg-gray-100 leading-loose rounded-lg"
          key={travel.id}
        >
          <Link href={`/travels/${travel.id}`}>
            <h2 className="font-bold text-xl">{travel.title}</h2>
            <p>
              {travel.author} - Room {travel.room}
            </p>

            <p>{travel.description}</p>
            <button
              className={`${
                travel.status === "open"
                  ? "bg-green-500"
                  : travel.status === "under review"
                  ? "bg-yellow-600"
                  : "bg-red-500"
              } py-1 px-4 text-center`}
            >
              {travel.status}
            </button>
          </Link>
        </div>
      ))}
      {travels.length === 0 && (
        <p className="text-center text-2xl">No travels found.</p>
      )}
    </main>
  );
}
