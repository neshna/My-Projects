export function getStartOfWeek (){
  const today = new Date ();
  const day = today.getDay();

  const diff = day === 0 ? -6 : 1-day 

  const monday = new Date(today);
  monday.setDate(today.getDate() + diff)
  monday.setHours(0,0,0,0);

  return monday ;

}