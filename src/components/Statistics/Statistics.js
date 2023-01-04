import PropTypes from 'prop-types';
import React from 'react';
import { StatStyles } from "./StatStyles"
import { datas } from "../../data/data.json"

export const Statistics = ( { data } ) => {
    return (<StatStyles>
       <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li className="item" key={data.id}>
      <span className="label" >555</span>
      <span className="percentage">555</span>
    </li>
    <li className="item">
      <span className="label">.mp3</span>
      <span className="percentage">14%</span>
    </li>
    <li className="item">
      <span className="label">.pdf</span>
      <span className="percentage">41%</span>
    </li>
    <li className="item">
      <span className="label">.mp4</span>
      <span className="percentage">12%</span>
    </li>
  </ul>
</section>
    </StatStyles>);
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.any.isRequired,
      percent: PropTypes.any.isRequired,
    }),
  ),
};

export default Statistics;
