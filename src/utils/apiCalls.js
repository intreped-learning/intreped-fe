const baseUrl = 'https://intreped-api.herokuapp.com/'

export const getCourses = async () => {
  const res = await fetch(`${baseUrl}courses/`);
  if (!res.ok) {
    throw Error('Failed to retrieve courses')
  }
  const courses = await res.json();
  return courses;
}

export const addToTeacherCourses = async (courseId) => {
  const body = {
    teacher_id: 1,
    course_id: courseId, 
    current_time_marker: "0s",
    is_favorite: true,
    is_complete: false,
    is_in_progress: false
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json'
    }
  }
  const res = await fetch(`${baseUrl}teacher_courses/`, options);
  if (!res.ok) {
    throw Error('Unable to add course to your list');
  };
  const addedCourse = await res.json();
  return addedCourse;
}

export const teacherSignIn = async (username, password) => {
  const res = await fetch(`${baseUrl}teachers/`);
  if (!res.ok) {
    throw Error('Unable to contact server for sign-in');
  };
  const teachers = await res.json();
  const foundUser = teachers.filter(teacher => teacher.username === username);
  if (foundUser.length) {
    const passMatch =  foundUser[0].password === password ? foundUser : [] ;
    return passMatch;
  } else {
    return [];
  }
}

export const completeCourse = async (id, duration) => {
  const body = {
    current_time_marker: duration,
    is_complete: true
  }
  const options = {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json'
    }
  }  
  const res = await fetch(`${baseUrl}teacher_courses/${id}`, options);
  if (!res.ok) {
    throw Error('Something went wrong, please try again');
  }
  const updatedCourse = await res.json();
  return updatedCourse
}

export const addTeacherBadge = async (teacherId, badgeId, duration) => {
  const body = {
    teacher_id: teacherId,
    badge_id: badgeId,
    cumulative_time: duration
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json'
    }
  }
  const res = await fetch(`${baseUrl}teacher_badges/`, options);
  if (!res.ok) {
    return 'Failed to add badge'
  }
  const addedBadge = await res.json(); 
}