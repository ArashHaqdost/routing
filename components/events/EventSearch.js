import Button from "../ui/Button"
import style from '../../styles/EventSearch.module.css';
import { useRef } from "react";

function EventSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event){
    event.preventDefault();
    const  selectyear = yearInputRef.current.value;
    const selectmonth = monthInputRef.current.value;

    props.onSearch(selectyear,selectmonth);
  }
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <div className={style.controls}>
        <div className={style.control}>
            <label>Year</label>
            <select id="year" ref={yearInputRef}>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
            </select>
        </div>
        <div className={style.control}>
            <label htmlFor="month">MOnth</label>
            <select id="month" ref={monthInputRef}>
                <option value='1'>January</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>Jun</option>
                <option value='7'>July</option>
                <option value='8'>Augest</option>
                <option value='9'>Septmber</option>
                <option value='10'>October</option>
                <option value='11'>Nomber</option>
                <option value=' 12'>Desomber</option>
            </select>
        </div>
        <Button>Find Events</Button>
     </div>
    </form>
  )
}

export default EventSearch