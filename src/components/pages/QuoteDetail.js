import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../comments/Comments";
import HighlightedQuote from "../comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Arthur", text: "Learning React is not easy" },
  { id: "q2", author: "Elios", text: "Learning React is worthy the effort" },
  { id: "q3", author: "Emily", text: "Learning React is super easy" },
  { id: "q4", author: "Jen", text: "Learning React is not hard not easy" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) return <p>No quote found!</p>;

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/:quoteId/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
