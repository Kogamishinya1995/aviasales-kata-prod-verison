import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../../../slices/filterSlice";
import { RootState } from "../../../../slices/index";

const Filters = () => {
  const filterState = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (
    _event: MouseEvent<HTMLElement>,
    newSelected: string
  ) => {
    dispatch(setFilter(newSelected));
  };

  return (
    <ToggleButtonGroup
      value={filterState.value}
      exclusive
      onChange={handleChange}
      aria-label="text alignment"
      className="search-bar__filters"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <ToggleButton
        value="cheepest"
        aria-label="left aligned"
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          textTransform: "none",
        }}
      >
        самый дешевый
      </ToggleButton>
      <ToggleButton
        value="fastest"
        aria-label="centered"
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          textTransform: "none",
        }}
      >
        самый быстрый
      </ToggleButton>
      <ToggleButton
        value="optimal"
        aria-label="right aligned"
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          textTransform: "none",
        }}
      >
        оптимальный
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filters;
