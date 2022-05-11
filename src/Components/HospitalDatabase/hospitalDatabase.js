import axios from 'axios'

const hospitals = `{
    "Hospital_Details": {
      "Max Multi Speciality Centre , Noida": {
        "Beds": "100",
        "Doctor Details": {
          "Cardiologist": {
            "Dr Anil": {
              "DoctorName": "Dr Anil",
              "DoctorTiming": {
                "2pm-5pm": {
                  "Seats": "22",
                  "Timing": "2pm-5pm"
                },
                "7pm-10pm": {
                  "Seats": "20",
                  "Timing": "7pm-10pm"
                },
                "9am-1pm": {
                  "Seats": "35",
                  "Timing": "9am-1pm"
                }
              },
              "Specialization": "Cardiologist"
            },
            "Dr Rajiv": {
              "DoctorName": "Dr Rajiv",
              "DoctorTiming": {
                "2pm-5pm": {
                  "Seats": "22",
                  "Timing": "2pm-5pm"
                },
                "7pm-10pm": {
                  "Seats": "20",
                  "Timing": "7pm-10pm"
                },
                "9am-1pm": {
                  "Seats": "35",
                  "Timing": "9am-1pm"
                }
              },
              "Specialization": "ENT"
            }
          }
        },
        "HospitalName": "Max Multi Speciality Centre , Noida",
        "HospitalRating": "3.5"
      },
      "Hariom Agresen Hospital": {
        "Beds": "100",
        "Doctor Details": {
          "Cardiologist": {
            "Dr Anil": {
              "DoctorName": "Dr Anil",
              "DoctorTiming": {
                "2pm-5pm": {
                  "Seats": "22",
                  "Timing": "2pm-5pm"
                },
                "7pm-10pm": {
                  "Seats": "20",
                  "Timing": "7pm-10pm"
                },
                "9am-1pm": {
                  "Seats": "35",
                  "Timing": "9am-1pm"
                }
              },
              "Specialization": "General Physician"
            },
            "Dr Rajiv": {
              "DoctorName": "Dr Rajiv",
              "DoctorTiming": {
                "2pm-5pm": {
                  "Seats": "22",
                  "Timing": "2pm-5pm"
                },
                "7pm-10pm": {
                  "Seats": "20",
                  "Timing": "7pm-10pm"
                },
                "9am-1pm": {
                  "Seats": "35",
                  "Timing": "9am-1pm"
                }
              },
              "Specialization": "Cardiologist"
            }
          }
        },
        "HospitalName": "Hariom Agresen Hospital",
        "HospitalRating": "5"
      },
      "Apollo Clinic, Rewari": {
        "Beds": "100",
        "Doctor Details": {
          "Cardiologist": {
            "Dr Anil": {
              "DoctorName": "Dr Sahil",
              "DoctorTiming": {
                "2pm-5pm": {
                  "Seats": "22",
                  "Timing": "2pm-5pm"
                },
                "7pm-10pm": {
                  "Seats": "20",
                  "Timing": "7pm-10pm"
                },
                "9am-1pm": {
                  "Seats": "35",
                  "Timing": "9am-1pm"
                }
              },
              "Specialization": "ENT"
            },
            "Dr Rajiv": {
              "DoctorName": "Dr Rohan",
              "DoctorTiming": {
                "2pm-5pm": {
                  "Seats": "22",
                  "Timing": "2pm-5pm"
                },
                "7pm-10pm": {
                  "Seats": "20",
                  "Timing": "7pm-10pm"
                },
                "9am-1pm": {
                  "Seats": "35",
                  "Timing": "9am-1pm"
                }
              },
              "Specialization": "Cardiologist"
            }
          }
        },
        "HospitalName": "Apollo Clinic, Rewari",
        "HospitalRating": "4.5"
      },
      "Mars Hospital": {
        "Beds": "100",
        "Doctor Details": {
          "Cardiologist": {
            "Dr Anil": {
              "DoctorName": "Dr Rahul",
              "DoctorTiming": {
                "2pm-5pm": {
                  "Seats": "22",
                  "Timing": "2pm-5pm"
                },
                "7pm-10pm": {
                  "Seats": "20",
                  "Timing": "7pm-10pm"
                },
                "9am-1pm": {
                  "Seats": "35",
                  "Timing": "9am-1pm"
                }
              },
              "Specialization": "Cardiologist"
            },
            "Dr Rajiv": {
              "DoctorName": "Dr Ramesh",
              "DoctorTiming": {
                "2pm-5pm": {
                  "Seats": "22",
                  "Timing": "2pm-5pm"
                },
                "7pm-10pm": {
                  "Seats": "20",
                  "Timing": "7pm-10pm"
                },
                "9am-1pm": {
                  "Seats": "35",
                  "Timing": "9am-1pm"
                }
              },
              "Specialization": "Cardiologist"
            }
          }
        },
        "HospitalName": "Mars Hospital",
        "HospitalRating": "4.1"
      }
      
    }
  }`

  const parse = JSON.parse(hospitals);

  axios.post('https://sahyogportal-mp2-default-rtdb.firebaseio.com/Default_Hospitals.json', parse);
//   const arr = [];
   
  
//   console.log(Object.keys(parse['Hospital_Details']))

  
//   for (const x of Object.keys(parse['Hospital_Details'] ) {
//     arr.push({...})
//   }
//   console.log(parse);