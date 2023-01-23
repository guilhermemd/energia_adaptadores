import data from "../../Mock/agenda.json";
import "./agenda.css";
const Agenda = () => {
  const { agenda } = data;
  return (
    <section className="agenda">
      <h1>Agenda:</h1>
      {agenda.map(({ data, local }) => (
        <div className="wrapperAgenda">
          <p className="agendaData">{data}</p>
          <p className="agendaLocal">{local}</p>
        </div>
      ))}
    </section>
  );
};

export default Agenda;
