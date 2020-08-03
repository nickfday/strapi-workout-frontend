import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import CustomizedTables from 'components/MaterialUI/dataDisplay/table/alternateTable';
import firebaseApp, { firestore } from '../../base.js';

const data = [
  {
    date: 'Wednesday, 29 Jul',
    duration: 45,
    exercises: [
      {
        title: 'Bench Press',
        sets: [
          {
            resistance: 80,
            reps: 10,
          },
          {
            resistance: 85,
            reps: 8,
          },
          {
            resistance: 90,
            reps: 6,
          },
        ],
      },
      {
        title: 'Dumbbell  Flye',
        sets: [
          {
            resistance: 16,
            reps: 10,
          },
          {
            resistance: 18,
            reps: 8,
          },
          {
            resistance: 20,
            reps: 6,
          },
        ],
      },
      {
        title: 'Dips',
        sets: [
          {
            resistance: 16,
            reps: 10,
          },
          {
            resistance: 18,
            reps: 8,
          },
          {
            resistance: 20,
            reps: 6,
          },
        ],
      },
    ],
    sessionName: 'Chest',
  },
  {
    date: 'Tuesday, 28 Jul',
    duration: 45,
    exercises: [
      {
        title: 'Bench Press',
        sets: [
          {
            resistance: 80,
            reps: 10,
          },
          {
            resistance: 85,
            reps: 8,
          },
          {
            resistance: 90,
            reps: 6,
          },
        ],
      },
      {
        title: 'Dumbbell  Flye',
        sets: [
          {
            resistance: 16,
            reps: 10,
          },
          {
            resistance: 18,
            reps: 8,
          },
          {
            resistance: 20,
            reps: 6,
          },
        ],
      },
      {
        title: 'Dips',
        sets: [
          {
            resistance: 16,
            reps: 10,
          },
          {
            resistance: 18,
            reps: 8,
          },
          {
            resistance: 20,
            reps: 6,
          },
        ],
      },
    ],
    sessionName: 'Legs',
  },
];

// const Exercise = ({ exercise }) => {
//   return (
//     <div>
//       {exercise.title}{' '}
//       <CustomizedTables headers={headers} rows={exercise.title} />
//     </div>
//   );
// };

const Session = ({ session }) => {
  // console.log(session);
  return (
    <div>
      <h2>{session.title}</h2>

      {/* <p>date:{format(new Date(session.date), 'E H:mm a')}</p> */}
      {session.date.toDate().toDateString()}
      <p>duration: {session.duration}</p>
      <CustomizedTables
        headers={['Exercise', 'Sets', 'Resistance', 'Reps']}
        rows={session.exercise.map((exercise) => {
          return [
            exercise.title,
            exercise.set.length,
            exercise.set.map((set) => {
              return `${set.resistance}, `;
            }),
            exercise.set.map((set) => {
              return `${set.reps}, `;
            }),
          ];
        })}
      />
    </div>
  );
};

const SessionList = (props) => {
  const [activities, setActivities] = useState([]);
  async function getFirestore() {
    firestore
      .collection('activity')

      .onSnapshot((snapshot) => {
        const activities = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log(activities);
        setActivities({ ...activities });
      });
  }

  useEffect(() => {
    getFirestore();
  }, []);

  return (
    <>
      {Object.values(activities).map((activity) => {
        return <Session session={activity} />;
      })}
    </>
  );
};

export default SessionList;
