// Greeting Component
import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg"

export function Greeting() {
  const timeOfDay = new Date();
  const currentHour = timeOfDay.getHours();
  let greetingImage;
  let greetingText;

  if (currentHour >= 6 && currentHour < 12) {
    greetingImage = day;
    greetingText = "Good Morning!";
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingImage = day;
    greetingText = "Good Afternoon!";
  } else if (currentHour >= 17 && currentHour < 21) {
    greetingImage = evening;
    greetingText = "Good Evening!";
  } else {
    greetingImage = night;
    greetingText = "Good Night!";
  }

  return (
    <h1 className="greeting">
      <img src={greetingImage} />
      <div>{greetingText}</div>
    </h1>
  );
}
