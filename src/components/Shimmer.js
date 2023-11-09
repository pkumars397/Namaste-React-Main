const Shimmer = () => {
  return (
    <div className="restraunt-List">
      {Array(20)
        .fill("")
        .map((item, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
