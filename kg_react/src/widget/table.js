export default function table(tHead, tBody) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered" dir="rtl">
        <thead>
          <tr className="tds">{tHead}</tr>
        </thead>
        <tbody>{tBody}</tbody>
      </table>
    </div>
  );
}
