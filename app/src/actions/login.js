export function studentsFetched(students) {
  return {
    type: "STUDENTS",
    payload: students
  };
}
export function classesFetched(classes) {
  return {
    type: "CLASSES",
    payload: classes
  };
}
export function tutorFetched(tutors) {
  return {
    type: "TUTORS",
    payload: tutors
  };
}

export function fetchStudents() {
  return dispatch => {
    fetch(`http://localhost:3000/api/org.blockchain.unichain.Student`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(studentsFetched(data));
        dispatch(fetchTutors());
      })
      .catch(e => e);
  };
}
export function fetchTutors() {
  return dispatch => {
    fetch(`http://localhost:3000/api/org.blockchain.unichain.Tutor`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(tutorFetched(data));
        dispatch(fetchClasses());
      })
      .catch(e => e);
  };
}
export function fetchClasses() {
  return dispatch => {
    fetch(`http://localhost:3000/api/org.blockchain.unichain.Class`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(classesFetched(data));
      })
      .catch(e => e);
  };
}
