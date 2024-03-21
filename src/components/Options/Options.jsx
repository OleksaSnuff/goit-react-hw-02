import css from "./Options.module.css";
const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  const onBtnClick = (e) => {
    updateFeedback(e.target.textContent.toLowerCase());
  };

  return (
    <>
      <ul className={css["options-list-buttons"]}>
        <li>
          <button onClick={onBtnClick}>Good</button>
        </li>
        <li>
          <button onClick={onBtnClick}>Neutral</button>
        </li>
        <li>
          <button onClick={onBtnClick}>Bad</button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button onClick={resetFeedback}>Reset</button>
          </li>
        )}
      </ul>
    </>
  );
};
export default Options;
