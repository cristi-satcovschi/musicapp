export function buildFilters(filters) {
  const filterEntries = Object.entries(filters);
  const hasFilters = !!filterEntries.length;

  if (!hasFilters) {
    return undefined;
  }

  const where = { AND: [] };
  filterEntries.forEach(([key, value]) => {
    where.AND.push({ [key]: { contains: value } });
  });

  return where;
}

export function buildSorting(sorting) {
  if (sorting.sortBy) {
    return { [sorting.sortBy]: sorting.sortOrder };
  } else {
    return {};
  }
  //   return sorting.length
  //     ? sorting.map((i) => ({ [i.name]: i.role }))
  //     : [{ crt: "asc" }];
}

export function buildPagination(page = 1, itemsPerPage = 10) {
  const skip = (page - 1) * itemsPerPage;
  const take = itemsPerPage;

  return { skip, take };
}
