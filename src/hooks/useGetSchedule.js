import { useState, useEffect } from 'react';

export const useGetSchedule = (schedules) => {
    const [state, setState] = useState([]);

    const getSchedules = async() => {
        const schedule = [];
        const snapshot = await schedules.orderBy('id', 'asc').get();

        snapshot.forEach((doc) => {
            schedule.push({
                id: doc.data().id,
                time: doc.data().time,
                bikes: doc.data().bikes,
            });
        });

        setState(schedule);
    };

    useEffect(() => {
        getSchedules();
    }, []);

    return {
        data: state,
    };
};