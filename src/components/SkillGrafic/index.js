import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import hooks from 'hooks';

import './style.scss';

const SkillGraphic = ({ userData }) => {
  const {
    skills: {
      libraries,
      base,
      editor,
      layout,
      utils,
      other,
    },
  } = userData;

  const { isDarkTheme } = hooks.useTheme();


  let skillName = [];
  let skillPercent = [];
  const mainInfo = [
    ...base, ...libraries, ...editor, ...layout, ...utils, ...other,
  ];

  mainInfo.forEach((skill) => {
    skillName = [...skillName, skill.name];
    skillPercent = [...skillPercent, skill.level * 10];
  });

  const borderStyle = isDarkTheme ? 'rgba(255, 206, 86, 0.2)' : 'rgba(54, 162, 235, 0.2)';

  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: skillName,
        datasets: [
          {
            label: false,
            display: false,
            data: skillPercent,
            backgroundColor: borderStyle,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: `skill ${userData.firstName} ${userData.lastName}`,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
  });
  return (
    <div className="skillGraphic">
      <canvas ref={canvasRef} className="skillGraphic__canvas" />
    </div>
  );
};
SkillGraphic.propTypes = {
  userData: PropTypes.object.isRequired,
};
export default SkillGraphic;
