export function timeUntilTakeOff (fromTime: string, takeOffTime: string): any {
  const parseDatetime = (datetime: string): Date => {
    const [currentDatetime] = datetime.split(' ');
    const [currentDate, currentTime] = currentDatetime.split('@');

    const [year, month, day] = currentDate.split('*').map(x => Number(x));
    const [hour, minutes, seconds] = currentTime.split('|').map(x => Number(x));

    return new Date(Date.UTC(year, month - 1, day, hour, minutes, seconds));
  };

  const from = parseDatetime(fromTime);
  const to = parseDatetime(takeOffTime);

  return Math.floor((to.getTime() - from.getTime()) / 1000);
}
