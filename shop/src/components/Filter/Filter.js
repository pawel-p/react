import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({ search, clear, filter, value }) => (
  <div className={styles.filter}>
    <div className={styles.filterHeader}>
      <h4>Search</h4>
      <button className={styles.clear} onClick={clear}>
        Clear
      </button>
    </div>
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={search}
        value={value}
      />
    </div>
    <h4>Manufacturer</h4>
    <div>
      <div>
        <input
          type="radio"
          name="manufacturere"
          id="all"
          value=""
          onChange={filter}
          checked
        />
        <label for="all">All</label>
      </div>
      <div>
        <input
          type="radio"
          name="manufacturere"
          id="apple"
          value="apple"
          onChange={filter}
        />
        <label for="apple">Apple</label>
      </div>
      <div>
        <input
          type="radio"
          name="manufacturere"
          id="dell"
          value="dell"
          onChange={filter}
        />
        <label for="dell">Dell</label>
      </div>
      <div>
        <input
          type="radio"
          name="manufacturere"
          id="lenovo"
          value="lenovo"
          onChange={filter}
        />
        <label for="lenovo">Lenovo</label>
      </div>
    </div>
  </div>
);
export default Filter;
