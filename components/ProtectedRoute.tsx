"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';
import { toast } from 'react-toastify';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 18px;
  text-align: center;
  background-color: #f5f5f5;
`;

const LoadingMessage = styled.div`
  margin-bottom: 20px;
  color: #666;
`;

const RedirectMessage = styled.div`
  margin-bottom: 20px;
  color: #4E46B4;
  font-weight: 500;
`;

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  redirectTo = '/Auth/signIn' 
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Show toast notification
      toast.info('Для добавления объявления необходимо войти в систему', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Add a small delay to show the message before redirecting
      const timer = setTimeout(() => {
        router.push(redirectTo);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isLoading, router, redirectTo]);

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingMessage>Загрузка...</LoadingMessage>
      </LoadingContainer>
    );
  }

  if (!isAuthenticated) {
    return (
      <LoadingContainer>
        <RedirectMessage>
          Для добавления объявления необходимо войти в систему
        </RedirectMessage>
        <LoadingMessage>
          Перенаправление на страницу входа...
        </LoadingMessage>
      </LoadingContainer>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute; 