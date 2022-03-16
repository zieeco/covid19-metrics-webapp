const dateFormata = () => {
  const today = new Date();
  const dd = String(today.getDate());
  const mm = today.getMonth() + 1;
  const mm2 = String(mm).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm2}-${dd}`;
};

const currentDate = dateFormata();

export default currentDate;
