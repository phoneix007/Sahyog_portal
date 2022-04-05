import axios from 'axios'

const data = [ 
    {
        name: 'Sir Shadi Lal Civil Hospital, Rewari',
        beds: 5,
        doctors: [
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'heart surgeon', 
                timings: '1 Am to 3 Pm'
            },
            {
                name: 'Dr. Ajinkya Kelkar', 
                speciality: 'cardiologist', 
                timings: '7 Am to 11 Am'
            },
            {
                name: 'Dr. A k Bansal', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Lalita Memorial Multispeciality Hospital - Best IVF Centre | Test Tube Baby ',
        beds: 11,
        doctors: [
            {
                name: 'Dr. Amit Kumar Verma', 
                speciality: 'heart surgeon', 
                timings: '10 Am to 12 Pm'
            },
            {
                name: 'Dr. Balwant Singh Hunjan', 
                speciality: 'cardiologist', 
                timings: '7 Am to 12 Pm'
            },
            {
                name: 'Dr. C N Kashyap', 
                speciality: 'physician', 
                timings: '11 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 4
    },

    {
        name: 'Centre | Multi-Speciality Hospital in Rewari ',
        beds: 7,
        doctors: [
            {
                name: 'Dr. Bhawana Kumari', 
                speciality: 'heart surgeon', 
                timings: '10 Am to 12 Pm'
            },
            {
                name: 'Dr. Biswaranjan Mohanty', 
                speciality: 'cardiologist', 
                timings: '6 Am to 12 Pm'
            },
            {
                name: 'Dr. B N Kashyap', 
                speciality: 'physician', 
                timings: '8 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '8 Am to 10 Pm'
            }
        ],
        ratings: 3
    },

    {
        name: 'Hariom Agresen Hospital',
        beds: 15,
        doctors: [
            {
                name: 'Dr. Bunshah Jamshed Jal', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Chetan Kabra', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. C N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binay Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Apollo Clinic, Rewari',
        beds: 9,
        doctors: [
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Chirag D. Mody', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. B N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binay Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 4
    },

    {
        name: 'Dr S. P. YADAV MULTISPECIALITY HOSPITAL - Hospital In Rewari - Multispeciality ',
        beds: 5,
        doctors: [
            {
                name: 'Dr Davinder Singh Rana', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr Krishan Gupta', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. C N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Hospital In Rewari',
        beds: 3,
        doctors: [
            {
                name: 'Dr Ram Singh', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr Amal Khan', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. B N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 2
    },

    {
        name: 'marsh hospital',
        beds: 10,
        doctors: [
            {
                name: 'Dr Amar Khan', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr Amal Khan', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 4
    },

    {
        name: 'Mars Hospital',
        beds: 7,
        doctors: [
            {
                name: 'Dr Davinder Singh Rana', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr Krishan Gupta', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'LifeCare Hospital Rewari',
        beds: 5,
        doctors: [
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Dr Rahul Dhingras Jai Luxmi Dental Clinic',
        beds: 5,
        doctors: [
            {
                name: 'Dr Davinder Singh Rana', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr Ram Kapoor', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Thyrocare Lab',
        beds: 5,
        doctors: [
            {
                name: 'Dr Davinder Singh Rana', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Deepak Dewan', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Red Cross',
        beds: 5,
        doctors: [
            {
                name: 'Dr Ram Kapoor', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr shivani Singh', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Pooja Skin Hospital',
        beds: 5,
        doctors: [
            {
                name: 'Dr shivani Singh', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr Ram Kapoor', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Metro Hospital & Heart Institute, Rewari, Haryana | Metro Umkal Hospital',
        beds: 5,
        doctors: [
            {
                name: 'Dr Ram Gupta', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr shivani Singh', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Hariram Skin Care Hospital',
        beds: 5,
        doctors: [
            {
                name: 'Dr Davinder Singh', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr Shivani Singh', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Dr. Mahendra Hospital',
        beds: 5,
        doctors: [
            {
                name: 'Dr. Deepak Dewan', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr Ram Kapoor', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Ganga Sahai Multispeciality Hospital',
        beds: 5,
        doctors: [
            {
                name: 'Dr. Deepak Dewan', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr Ram Kapoor', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Ujala Cygnus Super Speciality Hospital',
        beds: 5,
        doctors: [
            {
                name: 'Dr. Deepak Dewan', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Divya Dewan', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'SANJAY EYE CARE & OPTICAL CENTER',
        beds: 5,
        doctors: [
            {
                name: 'Dr. Deepak Dewan', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Divya Dewan', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Dr. R B Yadav Hospital - Best Hospital In Rewari',
        beds: 5,
        doctors: [
            {
                name: 'Dr. Deepak Dewan', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. B N Kashyap', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },

    {
        name: 'Dr.R B Yadav - Best Obstetr',
        beds: 5,
        doctors: [
            {
                name: 'Dr. Deepak Dewan', 
                speciality: 'heart surgeon', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. C N Kashyap', 
                speciality: 'cardiologist', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. A N Kashyap', 
                speciality: 'physician', 
                timings: '9 Am to 12 Pm'
            },
            {
                name: 'Dr. Binayananda Padhee', 
                speciality: 'gynecologist', 
                timings: '7 Am to 10 Pm'
            }
        ],
        ratings: 5
    },
]

const sendData = async () => {
    await axios.post('https://sahyogdatabase-default-rtdb.firebaseio.com/hospitals.json' , data);
}

sendData();