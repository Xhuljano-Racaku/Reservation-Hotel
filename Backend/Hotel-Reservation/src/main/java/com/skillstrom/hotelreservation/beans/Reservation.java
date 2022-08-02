package com.skillstrom.hotelreservation.beans;

import javax.persistence.*;

import java.util.Date;


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
    private Date startDate;
    @Column(name="end_date")
    private Date endDate;
    @Column(name="customer_id")
    private int customerId;

    public Reservation() {
    }

    public Reservation(int roomNum, Date startDate, Date endDate, int customerId) {
        this.roomNum = roomNum;
        this.startDate = startDate;
        this.endDate = endDate;
        this.customerId = customerId;
    }

    public Reservation(int reservationId, int roomNum, Date startDate, Date endDate, int customerId) {
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
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
