import { QueryFunction } from "@tanstack/react-query";
import { PetAPIResponse } from "../types/APIResponsesTypes";
import { Animal } from "../types/APIResponsesTypes";

const fetchSearch: QueryFunction<
  PetAPIResponse,
  [
    "search",
    {
      location: string;
      animal: Animal;
      breed: string;
    }
  ]
> = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1];

  const res = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error(`pet search not okay ${animal}, ${location}, ${breed}`);
  }

  return res.json();
};

export default fetchSearch;
