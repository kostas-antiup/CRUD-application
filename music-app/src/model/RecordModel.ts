import "reflect-metadata";
import { Record } from "@/model/Record";
import { VALID_GENRES } from "@/utility/Genres";
import { injectable } from "tsyringe";
import axios from 'axios';

@injectable()
export class RecordModel {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async getAll(): Promise<Record[]> {
    const response = await axios.get(`${this.apiUrl}/records`);
    return response.data;
  }

  async create(record: Record): Promise<string | null> {
    const error = this.validate(record);
    if (error) return error;  // Return validation error if any

    record.id = new Date().toISOString();

    try {
      await axios.post(`${this.apiUrl}/records`, record);
      return null;
    } catch (err) {
      console.error('Failed to create record:', err);
      return err;
    }
  }

  async update(id: string, updatedRecord: Record): Promise<string | null> {
    const error = this.validate(updatedRecord);
    if (error) return error;

    updatedRecord.id = id;

    try {
      await axios.put(`${this.apiUrl}/records/${id}`, updatedRecord);
      return null;
    } catch (err) {
      console.error('Failed to update record:', err);
      return err;
    }
  }

  async delete(id: string): Promise<string | null> {
    try {
      await axios.delete(`${this.apiUrl}/records/${id}`);
      return null;
    } catch (err) {
      console.error('Failed to delete record:', err);
      return err;
    }
  }

  async get(id: string): Promise<Record | null> {
    try {
      const response = await axios.get(`${this.apiUrl}/records/${id}`);
      return response.data;
    } catch (err) {
      console.error('Failed to get record:', err);
      return null;
    }
  }

  private validate(record: Record): string | null {
    // String validation
    if (!record.name || record.name.length < 3) return "Name must be at least 3 characters.";
    if (!record.artist || record.artist.length < 3) return "Artist must be at least 3 characters.";
    if (!record.genre) return "Genre is required.";
    if (!VALID_GENRES.includes(record.genre)) return "Invalid genre. Please select a valid EDM style.";
    if (!record.description || record.description.length < 5) return "Description must be at least 5 characters.";

    // Float validation
    if (record.price <= 0) return "Price must be greater than zero.";
    if (record.price > 10000) return "Price cannot exceed $10,000.";

    // Integer validation
    if (record.stock < 0) return "Stock cannot be negative.";
    if (record.stock > 1000) return "Stock cannot exceed 1000.";

    // DateTime validation
    if (!record.release_date) return "Release date is required.";
    const releaseDate = new Date(record.release_date);
    if (isNaN(releaseDate.getTime())) return "Release date must be a valid date.";
    if (releaseDate > new Date()) return "Release date cannot be in the future.";
    if (releaseDate.getFullYear() < 1900) return "Release date cannot be before 1900.";

    return null;
  }
}