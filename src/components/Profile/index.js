import React from 'react';

import { AvatarCard } from 'components/cards';
import { getLevelText } from 'helpers';
import SkillGraphic from 'components/SkillGrafic';

import data from 'src/data';

import './style.scss';

const Prifile = () => (
  <div className="profile">
    <AvatarCard
      url={data.avatar}
      fullName={`${data.firstName} ${data.lastName}`}
      age={data.age}
      level={getLevelText(data.level)}
      salary={`$${data.salaryUSD}`}
      // monthExperiens={}
    />
    <SkillGraphic userData={data} />
  </div>
);

export default Prifile;
