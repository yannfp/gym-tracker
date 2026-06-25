
interface DataPoint {
  label: string,
  value: number,
}

export function StickGraph({ data }: { data: DataPoint[] }) {
  const maxDataValue = Math.max(...data.map((d) => d.value), 0);

  const totalValue = data.reduce((sum, point) => sum + point.value, 0);
  const averageValue = data.length > 0 ? Number((totalValue / data.length).toFixed(1)) : 0;
  const averagePercentageHeight = maxDataValue > 0 ? (averageValue / maxDataValue) * 100 : 0;

  return (
    <div className="flex flex-col gap-4 p-4 bg-background-secondary rounded-2xl border border-text/5 w-full">

      <div className="flex flex-row items-end justify-between gap-6 h-48 px-2 relative">

        {maxDataValue > 0 && (
          <div
            className="absolute left-0 right-0 border-t border-dashed border-accent/40 z-0 pointer-events-none flex justify-end"
            style={{ bottom: `${averagePercentageHeight}%` }}
          >
            <span className="text-[9px] text-accent/60 font-medium -mt-4 bg-background-secondary px-1 rounded-sm">
              Avg: {averageValue}
            </span>
          </div>
        )}

        {data.map((point, index) => {
          const percentageHeight = Math.min((point.value / maxDataValue) * 100, 100);

          return (
            <div key={index} className="flex flex-col items-center h-full justify-end group z-10">

              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] text-accent font-medium mb-1 bg-background px-1.5 py-0.5 rounded border border-text/5">
                {point.value}
              </span>

              <div
                className="flex flex-col items-center justify-start w-4 relative"
                style={{ height: `${percentageHeight}%` }}
              >
                <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)] z-10 shrink-0" />

                <div className="w-0.5 h-full bg-linear-to-b from-accent/80 to-accent/10 rounded-b-full -mt-1" />
              </div>

            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-between gap-6 px-2 border-t border-text/10 pt-2">
        {data.map((point, index) => (
          <span key={index} className="w-fit text-center text-[10px] font-medium text-text/40">
            {point.label}
          </span>
        ))}
      </div>

    </div>
  );
}
