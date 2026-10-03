/**
 * Cinder House — TypeScript Data Models & Interfaces
 * Author: Aryan Sharma <aaddisharmarkczw@gmail.com>
 * Location: Tundla, Uttar Pradesh, India 283204
 */

export interface Room {
  id: string;
  name: string;
  tier: 'Standard' | 'Suite' | 'Loft' | 'Master';
  priceINR: number;
  description: string;
  amenities: string[];
  capacity: number;
}

export interface MenuItem {
  id: string;
  course: 'starters' | 'mains' | 'sweets' | 'cellar';
  name: string;
  description: string;
  priceINR: number;
  coalTemperatureC: number;
}

export interface ReservationRequest {
  guestName: string;
  guestEmail: string;
  checkInDate: string;
  checkOutDate: string;
  roomType: string;
  specialRequests?: string;
}
