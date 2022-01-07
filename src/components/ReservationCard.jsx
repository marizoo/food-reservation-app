import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice'
import { addCustomer } from '../features/customerSlice'
import {v4 as uuid} from "uuid"

// yarn add uuid @types/uui

const ReservationCard = ({name, index}) => {
      
    const dispatch = useDispatch();

    const handleRemove = () => {
      dispatch(removeReservation(index))
      dispatch(addCustomer({
        id: uuid(),
        name: name,
        food: []
      }))
    }

    return (
        <div onClick={handleRemove} className="reservation-card-container">
        <p>{name}</p>
      </div>
    )
}

export default ReservationCard
