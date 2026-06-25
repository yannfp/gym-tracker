interface MonthGridProps {
  monthName: string,
  totalDays: number,
  activeDays: number[],
}

export function MonthGrid({ monthName, totalDays, activeDays }: MonthGridProps) {
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center gap-3 font-sans">
      <span className="text-xs font-medium text-text/50">
        {monthName}
      </span>

      <div className="grid grid-cols-7 gap-1.5 justify-items-center">
        {days.map((day) => {
          const isActive = activeDays.includes(day);

          return (
            <div
              key={day}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive
                ? "bg-accent/90 scale-110"
                : "bg-text/30"
                }`}
              title={`${monthName} ${day}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export function NumberedMonthGrid({ monthName, totalDays, activeDays }: MonthGridProps) {
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);


  return (
    <div className="grid grid-cols-7 gap-3 justify-items-center">
      {days.map((day) => {
        const isActive = activeDays.includes(day);

        return (
          <div
            key={day}
            className={`w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center ${isActive
              ? "bg-accent/90 text-text scale-110"
              : "bg-text/20 text-text/30"
              }`}
            title={`${monthName} ${day}`}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
}
