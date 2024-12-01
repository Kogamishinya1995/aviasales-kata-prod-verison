import { Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import { TicketType } from "../../../../types.ts";
import getUniqueTransfers from "../../../../utils/getUniqueTransfers.ts";
import sortedTickets from "../../../../utils/sortedTickets.ts";
import Ticket from "./ticket/Ticket.tsx";
import { RootState, AppDispatch } from "../../../../slices/index";
import { fetchSearchId } from "../../../../slices/ticketsSlice.ts";
import { fetchAllTickets } from "../../../../utils/fetchAllTickets.ts";

const SearchResults = () => {
  const dispatch: AppDispatch = useDispatch();

  const transferState = useSelector((state: RootState) => state.transfers);
  const { searchId, tickets, loadingStatus, error } = useSelector(
    (state: RootState) => state.tickets
  );

  const uniqueTransfers = useMemo(
    () => getUniqueTransfers(transferState),
    [transferState]
  );

  const transferFilteredState = useSelector((state: RootState) =>
    state.tickets.tickets.filter((ticket: TicketType) =>
      ticket.segments.every((segment) =>
        uniqueTransfers.includes(segment.stops.length)
      )
    )
  );

  const filterState = useSelector((state: RootState) => state.filter.value);

  const filteredTickets = sortedTickets(transferFilteredState, filterState);

  useEffect(() => {
    if (!searchId) {
      void dispatch(fetchSearchId());
    }
  }, [dispatch, searchId]);

  useEffect(() => {
    if (searchId && loadingStatus === "succeeded" && tickets.length === 0) {
      void fetchAllTickets(searchId, dispatch, loadingStatus);
    }
  }, [searchId, loadingStatus, tickets.length, dispatch]);

  const [ticketsNumber, setTicketsNumber] = useState(5);

  return (
    <div className="search-bar__results-container">
      {loadingStatus === "loading" && (
        <div className="search-bar__loader">
          <BeatLoader
            color={"#89BAFF"}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            loading={true}
            speedMultiplier={1}
          />
        </div>
      )}
      {error && <p>Error: {error}</p>}
      {filteredTickets.length > 0 ? (
        <ul className="search-bar__results-list">
          {filteredTickets
            .filter((_, index) => index < ticketsNumber)
            .map((ticket: TicketType, index) => (
              <li className="search-bar__ticket" key={index}>
                <Ticket ticket={ticket} />
              </li>
            ))}
        </ul>
      ) : (
        !error && loadingStatus !== "loading" && <p>Подходящие билеты не найдены</p>
      )}
      <div className="search-bar__button">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setTicketsNumber(ticketsNumber + 5);
          }}
          sx={{ marginTop: 2 }}
        >
          Показать еще 5 билетов
        </Button>
      </div>
    </div>
  );
};

export default SearchResults;
