import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-top: 50px;

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #000;
`

export const Description = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 24px 0;
  font-weight: 400;
`

export const InputField = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }

  &.error {
    border-color: #e53935;
  }

  &::placeholder {
    color: #9ca3af;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: #5850ec;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4338ca;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  color: #9ca3af;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e5e7eb;
  }

  span {
    margin: 0 16px;
    font-size: 14px;
    text-transform: uppercase;
  }
`

export const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #111827;
  cursor: pointer;
  transition: background-color 0.2s;
  gap: 10px;

  &:hover {
    background-color: #f3f4f6;
  }

  svg {
    margin-right: 4px;
  }
`

export const SubText = styled.p`
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin: 24px 0 0 0;

  a {
    color: #5850ec;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`
