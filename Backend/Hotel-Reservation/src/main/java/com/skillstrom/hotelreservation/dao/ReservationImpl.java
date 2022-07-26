package com.skillstrom.hotelreservation.dao;

import com.skillstrom.hotelreservation.beans.Reservation;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ReservationImpl implements ReservationDAO{

    private JdbcTemplate jdbcTemplate;

    public ReservationImpl(JdbcTemplate jdbcTemplate){this.jdbcTemplate = jdbcTemplate;}

    @Override
    public Reservation create(Reservation reservation) {
        String sql = "Insert Into reservation (roomNum,startDate,endDate,customerId) " +
                "Values (?,?,?,?)";
        System.out.println(jdbcTemplate.update(sql, reservation.getRoomNum(),reservation.getStartDate(), reservation.getEndDate(),reservation.getCustomerId()));
        return reservation;
//        Integer id = jdbcTemplate.queryForObject(sql, Integer.class, reservation.getRoomNum(),
//                reservation.getStartDate(), reservation.getEndDate(),reservation.getCustomerId());
//        reservation.setId(id);
//        return reservation;
    }

    @Override
    public List<Reservation> findAll() {
        List<Reservation> allReservations = new ArrayList<>();
        String sql = "Select * From reservation";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()){
            Reservation reservation = mapRowToReservation(results);
            allReservations.add(reservation);
        }
        return allReservations;
    }

    @Override
    public Reservation findById(int reservationId) {
        String sql = "Select * From reservation Where reservationId = " + reservationId;
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql);
        if(result.next()){
            Reservation reservation = mapRowToReservation(result);
            return reservation;
        }
        return null;
    }

    @Override
    public List<Reservation> findByCustomerId(int customerId) {
        return null;
    }

    @Override
    public List<Reservation> findByDate(Date startDate) {
        return null;
    }

    @Override
    public Reservation update(Reservation reservationToUpdate) {
        return null;
    }

    @Override
    public void delete(int reservationId) {

    }

    private Reservation mapRowToReservation(SqlRowSet result) {
        Reservation reservation = new Reservation();
        reservation.setId(result.getInt("reservationId"));
        reservation.setRoomNum(result.getInt("roomNum"));
        reservation.setStartDate(result.getDate("startDate"));
        reservation.setEndDate(result.getDate("endDate"));
        reservation.setCustomerId(result.getInt("customerId"));
        return reservation;
    }

}
