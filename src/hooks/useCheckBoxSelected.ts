import { useTypedSelector } from "./useTypedSelector";

export const useCheckboxSelected = () => {
  const selectedCharacter = useTypedSelector((state) => state.chexbox.character);
  const selectedLocation = useTypedSelector((state) => state.chexbox.location);
  const selectedEpisodes = useTypedSelector((state) => state.chexbox.episodes);
  return {selectedCharacter, selectedEpisodes, selectedLocation}
};
