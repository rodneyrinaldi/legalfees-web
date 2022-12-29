function PViews({ visits }) {
  const visitsnumber = visits.toLocaleString("pt-BR");

  return <>{visitsnumber}</>;
}

export default PViews;
