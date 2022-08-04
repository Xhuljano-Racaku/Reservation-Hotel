package com.skillstrom.hotelreservation.beans;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.Future;

import java.sql.Date;
import java.time.LocalDate;


@Entity
@Table(name= "reservation")
public class Reservation {
    @Id
    @Column(name="reservation_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reservationId;
    @Column(name="room_num")
    private int roomNum;
    @Column(name="start_date")
    @Future
    private LocalDate startDate;
    @Column(name="end_date")
    @Future
    private LocalDate endDate;
    @Column(name="customer_id")
    private int customerId;

    public Reservation() {
    }

    public Reservation(int roomNum, LocalDate startDate, LocalDate endDate, int customerId) {
        this.roomNum = roomNum;
        this.startDate = startDate;
        this.endDate = endDate;
        this.customerId = customerId;
    }

    public Reservation(int reservationId, int roomNum, LocalDate startDate, LocalDate endDate, int customerId) {
        this.reservationId = reservationId;
        this.roomNum = roomNum;
        this.startDate = startDate;
        this.endDate = endDate;
        this.customerId = customerId;
    }

    public int getReservationId() {
        return reservationId;
    }

    public void setReservationId(int id) {
        this.reservationId = id;
    }

    public int getRoomNum() {
        return roomNum;
    }

    public void setRoomNum(int roomNum) {
        this.roomNum = roomNum;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + reservationId +
                ", roomNum=" + roomNum +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", customerId=" + customerId +
                '}';
    }
}
