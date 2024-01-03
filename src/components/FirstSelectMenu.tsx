import * as React from "react";
import { useAppDispatch } from "../redux/store";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useTheme, Theme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  toggleCheckboxCharacter,
  toggleCheckboxEpisodes,
  toggleCheckboxLocation,
} from "../redux/checkbox.slice";

export default function FirstSelectMenu() {
  const [checkedCharacter, setCheckedCharacter] = React.useState(false);
  const [checkedLocation, setCheckedLocation] = React.useState(false);
  const [checkedEpisodes, setCheckedEpisodes] = React.useState(false);

  const dispatch = useAppDispatch();
  const theme = useTheme<Theme>();
  const label = { inputProps: { "aria-label": "Select category" } };

  const handleCharacterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckedCharacter(event.target.checked);
    dispatch(toggleCheckboxCharacter(event.target.checked));
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedLocation(event.target.checked);
    dispatch(toggleCheckboxLocation(event.target.checked));
  };

  const handleEpisodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedEpisodes(event.target.checked);
    dispatch(toggleCheckboxEpisodes(event.target.checked));
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <SelectButton
            theme={theme}
            variant="contained"
            {...bindTrigger(popupState)}
          >
            <p>Select Item</p>
            <KeyboardArrowDownIcon />
          </SelectButton>
          <Menu
            {...bindMenu(popupState)}
            PaperProps={{ style: { width: "213px" } }}
            BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.8)" } }}
          >
            <MenuItem>
              <FormControlLabel
                sx={{ width: "100%", justifyContent: "space-between" }}
                labelPlacement="start"
                label="Character"
                control={
                  <Checkbox
                    checked={checkedCharacter}
                    onChange={handleCharacterChange}
                    {...label}
                    color="info"
                  />
                }
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                sx={{ width: "100%", justifyContent: "space-between" }}
                labelPlacement="start"
                label="Location"
                control={
                  <Checkbox
                    checked={checkedLocation}
                    onChange={handleLocationChange}
                    {...label}
                    color="info"
                  />
                }
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                sx={{ width: "100%", justifyContent: "space-between" }}
                labelPlacement="start"
                label="Episodes"
                control={
                  <Checkbox
                    checked={checkedEpisodes}
                    onChange={handleEpisodeChange}
                    {...label}
                    color="info"
                  />
                }
              />
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

const SelectButton = styled(Button)<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 213px;
`;
