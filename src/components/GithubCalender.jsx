// interface Day {
//                      date: string;
//                      count: number;
//                      level: 0 | 1 | 2 | 3 | 4;
//                    }

//                    function transformData(data: Array<Day>): Array<Day>;

// ...

import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div>
      <GitHubCalendar
        username="Chhattoo25"
        transformData={selectLastHalfYear}
        hideTotalCount
        hideColorLegend
      />
    </div>
  );
};

export default GithubCalender;
