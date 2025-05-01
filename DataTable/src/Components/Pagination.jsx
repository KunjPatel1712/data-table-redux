
function Pagination({ current, total, onChange }) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={current === 1}
      onClick={() => onChange(current - 1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page" style={{margin:"0px 10px"}}>{current}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={current === total}
      onClick={() => onChange(current + 1)}
    >
      Next
    </button>
  );
  return (
    <div data-testid="page-container">
      <div>
        {prev}
        {currentPage}
        {next}
      </div>
    </div>
  );
}

export default Pagination;
