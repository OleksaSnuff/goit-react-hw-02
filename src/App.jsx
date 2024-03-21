import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [comment, setComment] = useState(() => {
    const savedComment = JSON.parse(window.localStorage.getItem("key"));
    return savedComment !== null
      ? savedComment
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    if (comment !== null) {
      window.localStorage.setItem("key", JSON.stringify(comment));
    }
  }, [comment]);

  const updateFeedback = (feedbackType) => {
    setComment({ ...comment, [feedbackType]: comment[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setComment({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = comment.good + comment.neutral + comment.bad;
  const positiveFeedback = Math.round((comment.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          comment={comment}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
