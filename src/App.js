import Section from './Section/Section';
import './App.css';

function App() {
  return (
    <div id='wrapper'>
      <Section name='SEDANS' desc='Choose a sedan for its affordability & excellent fuel economy. Ideal for cruising in the city or on your next road trip.' id='sedan-btn' bg='hsl(31, 77%, 52%)' img='./images/icon-sedans.svg' />
      <Section name='SUVS' desc='Take an SUV for its spacious interior, power, & versatility. Perfect for your next family vacation & off-road adventures.' id='suv-btn' bg='hsl(184, 100%, 22%)' img='./images/icon-suvs.svg' />
      <Section name='SEDANS' desc='Choose a sedan for its affordability & excellent fuel economy. Ideal for cruising in the city or on your next road trip.' id='lux-btn' bg='hsl(179, 100%, 13%)' img='./images/icon-luxury.svg' />
    </div>
  );
}

export default App;

