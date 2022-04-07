const sortDateTime = (notes, sortBy) => {
  if (sortBy === "OLDEST_FIRST")
    return [...notes].sort(
      (a, b) => new Date(a.createdOn) - new Date(b.createdOn)
    );
  if (sortBy === "NEWEST_FIRST")
    return [...notes].sort(
      (a, b) => new Date(b.createdOn) - new Date(a.createdOn)
    );
  return notes;
};

export { sortDateTime };
