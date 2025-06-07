import React from 'react';

// Common Types
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// User and Participant Types
export interface Participant extends BaseEntity {
  name: string;
  email: string;
  age: number;
  country: string;
  city: string;
  bio: string;
  interests: string[];
  profileImage?: string;
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  registrationDate: Date;
  isActive: boolean;
}

export interface Organizer extends BaseEntity {
  name: string;
  position: string;
  country: string;
  bio: string;
  profileImage: string;
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// Event Types
export interface ForumEvent extends BaseEntity {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  type: 'panel' | 'workshop' | 'conference' | 'networking';
  capacity: number;
  registeredCount: number;
  speakers: string[];
  tags: string[];
  image?: string;
}

export interface CountdownTimer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Content Types
export interface BlogPost extends BaseEntity {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage?: string;
  image: string;
  tags: string[];
  category: string;
  readTime: number;
  isPublished: boolean;
}

export interface Testimonial extends BaseEntity {
  participant: string;
  content: string;
  image?: string;
  country: string;
  position?: string;
  rating: number;
}

export interface ThematicAxis {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: string;
  color: string;
}

// UI State Types
export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface FormState {
  isSubmitting: boolean;
  errors: Record<string, string>;
  success: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  country?: string;
}

// Application State Types
export interface AppState {
  isLoading: boolean;
  error: string | null;
  theme: 'light' | 'dark';
  language: 'es' | 'en';
}

export interface ForumState {
  nextEvent: ForumEvent | null;
  countdown: CountdownTimer;
  statistics: Statistic[];
  participants: Participant[];
  organizers: Organizer[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
  thematicAxes: ThematicAxis[];
  isRegistrationOpen: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Event Handlers Types
export type EventHandler<T = void> = (data?: T) => void | Promise<void>;
export type FormSubmitHandler<T> = (data: T) => Promise<void>;

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  id?: string;
}

export interface ThematicAxisDetail extends ThematicAxis {
  longDescription: string;
  objectives: string[];
  sessions: ThematicSession[];
  speakers: ThematicSpeaker[];
  resources: ThematicResource[];
  relatedArticles: string[];
  schedule: ThematicSchedule[];
}

export interface ThematicSession {
  id: string;
  title: string;
  description: string;
  type: 'panel' | 'workshop' | 'conference' | 'debate';
  duration: number; // en minutos
  capacity: number;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface ThematicSpeaker {
  id: string;
  name: string;
  position: string;
  organization: string;
  country: string;
  bio: string;
  image: string;
  expertise: string[];
  socialMedia: Record<string, string>;
}

export interface ThematicResource {
  id: string;
  title: string;
  type: 'document' | 'video' | 'book' | 'article' | 'website';
  url: string;
  description: string;
  language: string;
}

export interface ThematicSchedule {
  id: string;
  date: Date;
  startTime: string;
  endTime: string;
  sessionId: string;
  location: string;
}

export interface GalleryPhoto extends BaseEntity {
  title: string;
  image: string;
  description: string;
  event: ForumEvent;
  category: 'panel' | 'networking' | 'workshops' | 'ceremonies' | 'social' | 'speakers';
  type?: 'photo' | 'video';
  photographer?: string;
  location: string;
  date: Date;
  tags: string[];
}

export interface ForumEventSummary {
  id: string;
  title: string;
  year: number;
  city: string;
  country: string;
  dates: string;
  participants: number;
  countries: number;
  keyHighlights: string[];
  coverImage: string;
  photos: GalleryPhoto[];
} 