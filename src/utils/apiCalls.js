const baseUrl = 'https://intreped-api.herokuapp.com/'

export const getCourses = async () => {
  const res = await fetch(`${baseUrl}courses/`);
  if (!res.ok) {
    throw Error('Failed to retrieve courses')
  }
  const courses = await res.json();
  return courses;
}
