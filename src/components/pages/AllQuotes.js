import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Arthur", text: "Learning React is not easy" },
  { id: "q2", author: "Elios", text: "Learning React is worthy the effort" },
  { id: "q3", author: "Emily", text: "Learning React is super easy" },
  { id: "q4", author: "Jen", text: "Learning React is not hard not easy" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
