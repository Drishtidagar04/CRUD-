// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchProjects();
    fetchEmployees();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase.from('projects').select('*');
      if (error) {
        throw error;
      }
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error.message);
    }
  };

  const fetchEmployees = async () => {
    try {
      const { data, error } = await supabase.from('employees').select('*');
      if (error) {
        throw error;
      }
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error.message);
    }
  };

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name} - {project.description}
          </li>
        ))}
      </ul>

      <h2>Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
