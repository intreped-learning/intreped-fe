import {courses} from '../courses'

describe('courses reducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = courses(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return all the courses in state when one is added', () => {
    const initialState = [
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

    const action = {
      type: 'ADD_COURSE',
      payload: [{
        "model": "intreped.course",
        "pk": 3,
        "fields": {
          "title": "World Cafe",
          "description": "This video shows how to introduce students to the world cafe teaching protocol.",
          "url": "https://www.youtube.com/watch?v=7ODLvTBvKow",
          "thumbnail": "https://i.ytimg.com/vi/7ODLvTBvKow/mqdefault.jpg",
          "category": "Engagement Strategies",
          "duration": "1m39s"
        }
      }]
    }

    const expected = [...initialState, ...action.payload]

    const results = courses(initialState, action)

    expect(results).toEqual(expected)
  })

  it('should return all courses in state except the one removed when a course is removed', () => {
    const initialState = [
      {
        "model": "intreped.course",
        "id": 1,
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
        "id": 2,
        "fields": {
          "title": "Think Pair Share Explained",
          "description": "This video provides a succinct explanation for students about how to participate in THINK PAIR SHARE activities.",
          "url": "https://www.youtube.com/watch?v=wW87rihT38I",
          "thumbnail": "https://i.ytimg.com/vi/wW87rihT38I/mqdefault.jpg",
          "category": "Engagement Strategies",
          "duration": "1m35s"
        }
      },
      {
        "model": "intreped.course",
        "id": 3,
        "fields": {
          "title": "World Cafe",
          "description": "This video shows how to introduce students to the world cafe teaching protocol.",
          "url": "https://www.youtube.com/watch?v=7ODLvTBvKow",
          "thumbnail": "https://i.ytimg.com/vi/7ODLvTBvKow/mqdefault.jpg",
          "category": "Engagement Strategies",
          "duration": "1m39s"
        }
      }
    ]

    const action = {
      type: 'REMOVE_COURSE',
      payload: 1
    }

    const expected = [
      {
      "model": "intreped.course",
      "id": 2,
      "fields": {
        "title": "Think Pair Share Explained",
        "description": "This video provides a succinct explanation for students about how to participate in THINK PAIR SHARE activities.",
        "url": "https://www.youtube.com/watch?v=wW87rihT38I",
        "thumbnail": "https://i.ytimg.com/vi/wW87rihT38I/mqdefault.jpg",
        "category": "Engagement Strategies",
        "duration": "1m35s"
      }
      },
      {
        "model": "intreped.course",
        "id": 3,
        "fields": {
          "title": "World Cafe",
          "description": "This video shows how to introduce students to the world cafe teaching protocol.",
          "url": "https://www.youtube.com/watch?v=7ODLvTBvKow",
          "thumbnail": "https://i.ytimg.com/vi/7ODLvTBvKow/mqdefault.jpg",
          "category": "Engagement Strategies",
          "duration": "1m39s"
        }
      }
    ]

    const results = courses(initialState, action)

    expect(results).toEqual(expected)
  })
})