package com.skillstrom.hotelreservation.beans;

import java.util.Date;

public class Reservation {
    private int id;
    private int roomNum;
    private Date startDate;
    private Date endDate;
    private int customerId;

    public Reservation() {
    }

    public Reservation(int roomNum, Date startDate, Date endDate, int customerId) {
        this.roomNum = roomNum;
        this.startDate = startDate;
        this.endDate = endDate;
        this.customerId = customerId;
    }

    public Reservation(int id, int roomNum, Date startDate, Date endDate, int customerId) {
        this.id = id;
        this.roomNum = roomNum;
        this.startDate = startDate;
        this.endDate = endDate;
        this.customerId = customerId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
                "id=" + id +
                ", roomNum=" + roomNum +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", customerId=" + customerId +
                '}';
    }
}
