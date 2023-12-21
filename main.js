const yesterdayHeader = document.querySelector('th.evening.press');
const currentDayOfWeekHeader = document.querySelector('th.day__week.press');
const chartImage = document.querySelector('.chart__one');
const currentDayHeader = document.querySelector('th.current.press');

yesterdayHeader.addEventListener('click', () => changeChartImage('2.png'));
currentDayOfWeekHeader.addEventListener('click', () =>
  changeChartImage('3.png')
);
currentDayHeader.addEventListener('click', () => restoreDefaultImage('1.png'));

function changeChartImage(imageSrc) {
  chartImage.src = imageSrc;
}

function restoreDefaultImage(imageSrc) {
  chartImage.src = imageSrc;
}
