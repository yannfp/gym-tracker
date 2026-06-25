import { ChevronRight } from "lucide-react";

import { NumberedMonthGrid } from "../components/MonthGrid.tsx";

function Week() {

  const days = [
    { key: "monday", letter: "M" },
    { key: "tuesday", letter: "T" },
    { key: "wednesday", letter: "W" },
    { key: "thursday", letter: "T" },
    { key: "friday", letter: "F" },
    { key: "saturday", letter: "S" },
    { key: "sunday", letter: "S" },
  ];

  return (
    <div className="grid grid-cols-7 gap-3 justify-items-center w-full">
      {days.map((day) => (
        <div
          className="flex items-center justify-center w-7 h-7 bg-background/40 text-text/20 rounded-full text-xs font-semibold"
          key={day.key}
        >
          {day.letter}
        </div>
      ))}
    </div>
  );
}

export function MonthActivity({ monthName }) {
  const activeDays = [1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 16, 17, 20, 22, 24, 27, 29, 30];

  return (
    <div className="flex flex-col gap-3 p-4 bg-background-secondary rounded-2xl w-full">

      <div className="flex flex-row  items-center justify-between">
        <span className="font-bold">
          {monthName}
        </span>

        <ChevronRight />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <Week />

        <NumberedMonthGrid
          monthName={monthName}
          totalDays={31}
          activeDays={activeDays}
        />
      </div>

      <div className="flex flex-row mt-1 justify-between">
        <div className="flex flex-col">
          <span className="text-lg">
            {activeDays.length}
          </span>
          <span className="text-text/60 text-sm">
            Total sessions
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-lg">
            5 weeks
          </span>
          <span className="text-text/60 text-sm">
            Current streak
          </span>
        </div>

      </div>

    </div>
  );
}
