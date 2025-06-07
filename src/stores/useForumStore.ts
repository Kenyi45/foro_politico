import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import {
  ForumState,
  ForumEvent,
  CountdownTimer,
  Statistic,
  Participant,
  Organizer,
  Testimonial,
  BlogPost,
  ThematicAxis,
  ContactForm
} from '../types';

interface ForumStore extends ForumState {
  // Actions
  setNextEvent: (event: ForumEvent | null) => void;
  updateCountdown: (countdown: CountdownTimer) => void;
  setStatistics: (statistics: Statistic[]) => void;
  addParticipant: (participant: Participant) => void;
  removeParticipant: (participantId: string) => void;
  setOrganizers: (organizers: Organizer[]) => void;
  setTestimonials: (testimonials: Testimonial[]) => void;
  setBlogPosts: (blogPosts: BlogPost[]) => void;
  setThematicAxes: (axes: ThematicAxis[]) => void;
  toggleRegistration: () => void;
  
  // Computed values
  getParticipantCount: () => number;
  getActiveTestimonials: () => Testimonial[];
  getRecentBlogPosts: (limit?: number) => BlogPost[];
  
  // Form handling
  submitContactForm: (form: ContactForm) => Promise<boolean>;
  registerParticipant: (participant: Omit<Participant, 'id' | 'createdAt' | 'updatedAt' | 'registrationDate'>) => Promise<boolean>;
}

const initialState: ForumState = {
  nextEvent: null,
  countdown: {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  statistics: [],
  participants: [],
  organizers: [],
  testimonials: [],
  blogPosts: [],
  thematicAxes: [],
  isRegistrationOpen: true
};

export const useForumStore = create<ForumStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        
        // Actions
        setNextEvent: (event) => set({ nextEvent: event }, false, 'setNextEvent'),
        
        updateCountdown: (countdown) => set({ countdown }, false, 'updateCountdown'),
        
        setStatistics: (statistics) => set({ statistics }, false, 'setStatistics'),
        
        addParticipant: (participant) => set(
          (state) => ({
            participants: [...state.participants, participant]
          }),
          false,
          'addParticipant'
        ),
        
        removeParticipant: (participantId) => set(
          (state) => ({
            participants: state.participants.filter(p => p.id !== participantId)
          }),
          false,
          'removeParticipant'
        ),
        
        setOrganizers: (organizers) => set({ organizers }, false, 'setOrganizers'),
        
        setTestimonials: (testimonials) => set({ testimonials }, false, 'setTestimonials'),
        
        setBlogPosts: (blogPosts) => set({ blogPosts }, false, 'setBlogPosts'),
        
        setThematicAxes: (thematicAxes) => set({ thematicAxes }, false, 'setThematicAxes'),
        
        toggleRegistration: () => set(
          (state) => ({ isRegistrationOpen: !state.isRegistrationOpen }),
          false,
          'toggleRegistration'
        ),
        
        // Computed values
        getParticipantCount: () => get().participants.length,
        
        getActiveTestimonials: () => get().testimonials.filter(t => t.rating >= 4),
        
        getRecentBlogPosts: (limit = 3) => {
          const posts = get().blogPosts
            .filter(post => post.isPublished)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          return limit ? posts.slice(0, limit) : posts;
        },
        
        // Form handling
        submitContactForm: async (form: ContactForm): Promise<boolean> => {
          try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Contact form submitted:', form);
            return true;
          } catch (error) {
            console.error('Error submitting contact form:', error);
            return false;
          }
        },
        
        registerParticipant: async (participantData): Promise<boolean> => {
          try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const newParticipant: Participant = {
              id: Math.random().toString(36).substr(2, 9),
              ...participantData,
              createdAt: new Date(),
              updatedAt: new Date(),
              registrationDate: new Date(),
              isActive: true
            };
            
            get().addParticipant(newParticipant);
            return true;
          } catch (error) {
            console.error('Error registering participant:', error);
            return false;
          }
        }
      }),
      {
        name: 'forum-storage',
        partialize: (state) => ({
          participants: state.participants,
          isRegistrationOpen: state.isRegistrationOpen
        })
      }
    ),
    {
      name: 'forum-store'
    }
  )
); 