-- Cinder House Relational Database Architecture (PostgreSQL)
-- Author: Aryan Sharma <aaddisharmarkczw@gmail.com>
-- Location: Tundla, Uttar Pradesh, India 283204

CREATE TABLE IF NOT EXISTS rooms (
    room_id VARCHAR(32) PRIMARY KEY,
    room_name VARCHAR(128) NOT NULL,
    price_per_night_inr NUMERIC(10,2) NOT NULL,
    max_guests INT NOT NULL DEFAULT 2,
    amenities JSONB DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS guest_reservations (
    reservation_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guest_name VARCHAR(255) NOT NULL,
    guest_email VARCHAR(255) NOT NULL,
    guest_phone VARCHAR(32),
    room_id VARCHAR(32) REFERENCES rooms(room_id) ON DELETE CASCADE,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    status VARCHAR(32) DEFAULT 'CONFIRMED',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dining_orders (
    order_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    table_number INT NOT NULL,
    course_category VARCHAR(64) NOT NULL,
    item_name VARCHAR(128) NOT NULL,
    price_inr NUMERIC(10,2) NOT NULL,
    order_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_reservations_dates ON guest_reservations (check_in, check_out);
CREATE INDEX IF NOT EXISTS idx_dining_course ON dining_orders (course_category);
