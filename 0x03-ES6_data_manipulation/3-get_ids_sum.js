const getStudentIdsSum = (list) => {
  const id = list.reduce(
    (acc, value) => acc + value.id, 0,
  );
  return id;
};

export default getStudentIdsSum;
