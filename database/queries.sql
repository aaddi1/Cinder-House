-- Analytical Queries for Cinder House Platform
-- Average length of stay and occupancy rate analytics

SELECT 
    r.room_name,
    COUNT(gr.reservation_id) AS total_bookings,
    ROUND(AVG(gr.check_out - gr.check_in), 1) AS avg_nights_stayed,
    SUM(r.price_per_night_inr * (gr.check_out - gr.check_in)) AS total_revenue_inr
FROM rooms r
LEFT JOIN guest_reservations gr ON r.room_id = gr.room_id
GROUP BY r.room_id, r.room_name
ORDER BY total_revenue_inr DESC;
