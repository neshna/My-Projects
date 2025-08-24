import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
export function formatDate (deliveryDays){

  let todayDate = dayjs();
  let deliveryDate = todayDate.add(deliveryDays ,'days');
  let dateString = deliveryDate.format('dddd , MMMM D');
  return dateString;
  
}