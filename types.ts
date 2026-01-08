
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: string;
  link?: string; // Campo para redirecionamento
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface TechItem {
  name: string;
  icon: React.ReactNode;
}