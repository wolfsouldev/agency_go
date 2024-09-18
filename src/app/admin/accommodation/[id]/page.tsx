"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useDriverDetails } from "../hooks/useRoomDetail";
import FormRoom from "../components/form/form-room";

function RoomDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { data, isFetching } = useDriverDetails(+id);

  return (
    <section>
      <header className="flex items-center gap-x-3 mb-3">
        <Button
          onClick={() => router.back()}
          className="flex items-center gap-x-2"
          size={"sm"}
          variant={"outline"}
        >
          {" "}
          <ArrowLeft /> Volver
        </Button>
      </header>

      <div>{data && !isFetching && <FormRoom defaultValue={data} />}</div>
    </section>
  );
}

export default RoomDetails;
