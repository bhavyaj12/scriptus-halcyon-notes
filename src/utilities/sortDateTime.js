const sortDateTime = (notes, sortByDateTime) => {
  if (sortByDateTime === "OLDEST_FIRST")
    return [...notes].sort(
      (a, b) => new Date(a.createdOn) - new Date(b.createdOn)
    );
  if (sortByDateTime === "NEWEST_FIRST")
    return [...notes].sort(
      (a, b) => new Date(b.createdOn) - new Date(a.createdOn)
    );
  else {
    return notes;
  }
};

export { sortDateTime };
