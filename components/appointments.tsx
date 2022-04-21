import style from "../styles/Appointments.module.css";

function Appointments(data: any) {
  console.log(data);
  return (
    <div className={style.appointmentsContainer}>
      {data.data.data.map((appointment: any) => (
        <div className={style.meetCard} key={appointment.id}>
          <h4> {appointment.type} </h4>
          <h5>{appointment.when}</h5>
          <p>
            <b>{appointment.body}</b>
          </p>
        </div>
      ))}
    </div>
    // <div className={style.meetCard}>
    //   <h4> {title} </h4>
    //   <h5>{when}</h5>
    //   <p>
    //     <b>{body}</b>
    //   </p>
    // </div>
  );
}
export default Appointments;
