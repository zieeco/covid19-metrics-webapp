const dateFormata = () => {
  const today = new Date();
  const dd = String(today.getDate());
  const mm = String(today.getMonth()).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

const currentDate = dateFormata();

export default currentDate;
