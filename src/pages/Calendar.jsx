import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";
import { Header } from "../components";
import { scheduleData } from "../data/dummy";
const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, Month, DragAndDrop, WorkWeek, Agenda, Resize]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
