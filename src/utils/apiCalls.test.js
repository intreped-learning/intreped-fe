import { getCourses, addToTeacherCourses, teacherSignIn } from './apiCalls'

describe('apiCalls', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCourses)
      });
    });
  });

  describe('getCourses', () => {
    it('should fetch with the correct URL', () => {
      let url = 'https://intreped-api.herokuapp.com/courses/';
      getCourses();
      expect(window.fetch).toHaveBeenCalledWith(url);
    });
  
    it('should return all courses, HAPPY', async () => {
      const response = await getCourses();
      expect(response).toEqual(mockCourses);
    });

    it('should return an error if response not okay, SAD', async () => {
      // window.fetch = jest.fn().mockImplementation(() => {
      //   return Promise.resolve({
      //     ok: false
      //   })
      // })
      // const results = await getCourses();
      // expect(results).toEqual(('Failed to retrieve courses'))
    });
  })

  describe('addToTeacherCourses', () => {
    it('should fetch with the correct URL', () => {
      let url = 'https://intreped-api.herokuapp.com/teacher_courses/';
      const body = {
        teacher_id: 1,
        course_id: 1, 
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
      addToTeacherCourses(1);
      expect(window.fetch).toHaveBeenCalledWith(url, options);
    })

    it('should add a new teacher course, HAPPY', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCourses[0])
        });
      });
      const results = await addToTeacherCourses(1);
      expect(results).toEqual(mockCourses[0])
    })

    it('should return an error, SAD', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(addToTeacherCourses(1)).rejects.toEqual(Error('Unable to add course to your list'))
    })
  })

  describe('teacherSignIn', () => {
    it('should be called with the correct URL', () => {
      let url = 'https://intreped-api.herokuapp.com/teachers/';
      teacherSignIn()
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('should return a user if the username and password are found, HAPPY', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockTeachers)
        });
      });
      let username = "feeny_meets_world"
      let password = "classdismissed"
      let results = await teacherSignIn(username, password)
      expect(results[0]).toEqual(mockTeachers[0])
    })

    it('should return an empty array if either username or password not found, SAD', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockTeachers)
        });
      });
      let username = "billnye"
      let password = "thescienceguy"
      let results = await teacherSignIn(username, password)
      expect(results).toEqual([])
    })

    it('should return an empty array if username and password don\'t match, SAD', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockTeachers)
        });
      });
      let username = "feeny_meets_world"
      let password = "teachingrocks"
      let results = await teacherSignIn(username, password)
      expect(results).toEqual([])
    })
  })
  // need to test completeCourse
})

const mockCourses = [
  {
    "model": "intreped.course",
    "pk": 1,
    "fields": {
      "title": "Kagan Cooperative Learning: Inside-Outside Circle & Talking Chips",
      "description": "Kagan structures are techniques and activities teachers can use in their classrooms to keep students engaged, active, and have fun while they are learning",
      "url": "https://www.youtube.com/watch?v=B-hTXzUTxf8",
      "thumbnail": "https://i.ytimg.com/vi/hTXzUTxf8/mqdefault.jpg",
      "category": "Engagement Strategies",
      "duration": "11m30s"
    }
  },
  {
    "model": "intreped.course",
    "pk": 2,
    "fields": {
      "title": "Think Pair Share Explained",
      "description": "This video provides a succinct explanation for students about how to participate in THINK PAIR SHARE activities.",
      "url": "https://www.youtube.com/watch?v=wW87rihT38I",
      "thumbnail": "https://i.ytimg.com/vi/wW87rihT38I/mqdefault.jpg",
      "category": "Engagement Strategies",
      "duration": "1m35s"
    }
  }
]

const mockTeachers = [
  { username: "feeny_meets_world", password: "classdismissed" },
  { username: "frizzyginger", password: "getonthebus" },
  { username: "Schneebly", password: "teachingrocks" }
]