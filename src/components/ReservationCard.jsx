import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice'

const ReservationCard = ({name, index}) => {

    const dispatch = useDispatch();

    const handleRemove = (index) => {
        dispatch(removeReservation(index))
    }

    return (
        <div 
        className="reservation-card-container"
        onClick={() => handleRemove(index)}
        >{name}</div>
    )
}

export default ReservationCard
