import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Colors from '../../../../styles/common/Colors';

const ResultChart = () => {
  const value = 4;
  const total = 5;

  return (
    <div style={{ width: '17.8rem', height: '17.8rem', position: 'relative' }}>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={Colors.orange400} />
            <stop offset="100%" stopColor="#E47200" />
          </linearGradient>
        </defs>
      </svg>

      <CircularProgressbar
        value={(value / total) * 100}
        text={`${value}/${total}`}
        strokeWidth={14}
        styles={buildStyles({
          pathColor: 'url(#gradientColor)',
          trailColor: Colors.gray100,
          textColor: Colors.black,
          textSize: '2rem',
          strokeLinecap: 'round',
        })}
      />
    </div>
  );
};

export default ResultChart;
