import React from "react";
import styled from "@emotion/styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useCheckboxSelected } from "../hooks/useCheckBoxSelected";
import { Input } from '@mui/material';

interface Fields {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  dimension: string;
  episodes: string;
}

export default function CharacterForm() {
  const { selectedCharacter, selectedEpisodes, selectedLocation } =
    useCheckboxSelected();
  const { handleSubmit, control, register } = useForm<Fields>({
    defaultValues: {
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
      dimension: "",
      episodes: "",
    },
  });

  const onSubmit: SubmitHandler<Fields> = (data) => {
    console.log(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {(selectedCharacter || selectedLocation || selectedEpisodes) && (
          <Input {...register("name")} placeholder="Add Name" />
        )}
        {selectedCharacter && (
          <Input {...register("status")} placeholder="Add Status" />
        )}
        {selectedCharacter && (
          <Input {...register("species")} placeholder="Add Species" />
        )}
        {(selectedCharacter || selectedLocation) && (
          <Input {...register("type")} placeholder="Add Type" />
        )}
        {selectedCharacter && (
          <Input {...register("gender")} placeholder="Add Gender" />
        )}
        {selectedLocation && (
          <Input {...register("dimension")} placeholder="Add Dimension" />
        )}
        {selectedEpisodes && (
          <Input {...register("episodes")} placeholder="Add Episodes" />
        )}
      </StyledForm>
      <DevTool control={control} />
    </>
  );
}

const StyledForm = styled.form`
display:flex;
flex-direction: column`