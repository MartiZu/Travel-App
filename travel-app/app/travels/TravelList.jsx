import Link from "next/link";
import Image from "next/image";

async function getTravels() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("http://localhost:4000/travel", {
    method: "GET", // specify the HTTP method
    headers: {
      "Content-Type": "application/json", // specify the content type
    },
  });
  //   console.log(response);
  const travels = await response.json();
  //   console.log(travels);
  return travels.data;
}

export default async function TravelList() {
  const travels = await getTravels();
  console.log(travels);

  return (
    <main className="flex flex-col justify-center items-center shrink-0">
      {travels.map((travel) => (
        <div
          className="mx-32 my-8 p-8 w-full max-w-4xl bg-gray-100 leading-loose rounded-lg"
          key={travel.id}
        >
          <Link href={`/travels/${travel.id}`}>
            <h2 className="font-bold text-xl">{travel.city}, {travel.country}</h2>
            <p>
              {travel.best_time_to_visit}
            </p>

            <p>{travel.fun_fact}</p>
            <p>{travel.not_to_miss}</p>
            {/* <Image
              src={travel.imglink}
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
          </Link>
        </div>
      ))}
      {travels.length === 0 && (
        <p className="text-center text-2xl">No travels found.</p>
      )}
    </main>
  );
}
